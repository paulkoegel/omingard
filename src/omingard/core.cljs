;; 1. Let there be cards in a stack: 1 Rummy deck (52 cards - 2-10, jack, queen, king, ace)
;; 2. shuffle stack.
;; 3. serve cards to columns
;; 4. game begins: either move a free open card from one column to another, discard aces
;;    (and after them 2s etc.) to one of eight discard piles, or serve new open cards (1 per column)
;; 5. continue until there are no more moves (you lose) or all cards have been discarded to the piles.

(ns omingard.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.data :as data]
            [clojure.string :as string]))

(enable-console-print!)

;; DEBUGGING HELPERS

;; transforms "J" etc. back to 11 etc.
(defn value-from-literal-value [literal-value]
  (let [literal-value (string/lower-case literal-value)]
  ;;(let [literal-value (string/lower-case literal-value)]
    (cond
      (= literal-value "a") 1
      (= literal-value "j") 11
      (= literal-value "q") 12
      (= literal-value "k") 13
      :else (js/parseInt literal-value))))

;; "d.12.a" creates a queen of diamonds (with deck "a") card map
(defn card [card-string]
  (let [card-components (string/split card-string #"\.")
        suit (keyword (first card-components))
        value (second card-components)
        deck (if (= (count card-components) 3) (keyword (last card-components)) nil)]
    {:suit
       (cond (= suit :s) :spades
             (= suit :c) :clubs
             (= suit :h) :hearts
             (= suit :d) :diamonds)
     :value (value-from-literal-value value)
     :deck (or deck :a)}))

;; GLOBAL CONSTANTS
(def columns# 9)

;; HELPER FUNCTIONS
(defn colour [{suit :suit :as card}]
  (cond
    (some #{suit} [:hearts :diamonds]) :red
    (some #{suit} [:clubs :spades])    :black))

;; replaces certain values with "J" (jack) etc.
;; [card]
(defn display-value [{value :value}]
  (cond
    (= value 1) "A"
    (and (> value 0) (< value 11)) (str value)
    (= value 11) "J"
    (= value 12) "Q"
    (= value 13) "K"))

(defn symbol-for-suit [suit]
  (case suit
    :spades "♠"
    :hearts "♥"
    :diamonds "♦"
    :clubs "♣"
    nil))

(defn open? [card]
  (:open card))

(defn label-for [card]
  (str (symbol-for-suit (:suit card)) " " (display-value card) " (" (:deck card) ")"))

(defn children-of [column card]
  (vec (rest (drop-while
               (fn [el] (not= el card))
               column))))

(defn with-alternating-colours? [cards]
  (let [colours (map #(colour %) cards)]
    ;; potential problem with the reduce function is that it'll return `false` if the last element
    ;; of an alternating sequence is `false`, but that should not happen.
    ;; works when cards contains only one card
    (reduce
      (fn [memo colour] (if (not= memo colour) colour (reduced false))) ;; `reduced` breaks the iteration
      (first colours)
      (rest colours))))

(defn sorted-from-card? [column card]
  (let [children (children-of column card)]
    (if (empty? children)
      true
      (let [cards (conj card children)]
        (and (= cards (sort-by #(:value %) cards))
             (with-alternating-colours? children))))))

(defn moveable? [column card]
  (and (open? card) (sorted-from-card? (:cards column) card)))

(defn free-pile-for [piles card]
  (first
    (->> ((:suit card) piles)
         (filter
           (fn [pile]
             (= (count pile) (dec (:value card))))))))

#_(first (filter
  (fn [pile] (= (count pile) 0))
  (:hearts (:piles @app-state))))

#_(first (->> (:diamonds (:piles @app-state))
     (filter (fn [pile] (= (count pile) (dec 1))))))


#_(->> (:hearts (:piles @app-state)))

;; derefing to the max - not applicable in free-pile-for as (:value card) cannot be used for destructuring - can it?
;; (def state {:piles {:hearts [[] []]}})
;; (defn x [{{pile :hearts} :piles}] pile)
;; (x state)


;; DISCARD CARDS - - - - - - -

(defn column-for [columns card]
  (first (filter
    (fn [column] (some #{card} (:cards column)))
    columns)))

(defn discardable? [app card]
  ;; TODO: implement real check
  (and (moveable? (column-for (:columns app) card) card) (free-pile-for (:piles app) card)))

;; only a column's last card is discardable
;; idea for improvement: clicking on the highest sorted card on
;; a pile discards all sorted cards below it automatically as well.
(defn discard-card [app card]
  (let [column (column-for (:columns app) card)]
    (if (discardable? app card)
      (-> app
        (update-in [:columns (:index column) :cards] pop)
        ;; TODO: find pile via free-pile-for and add index to piles
        (update-in [:piles (:suit card) 0] conj card)
        ;; open last card of pile
        (update-in [:columns (:index column) :cards]
                     (fn [cds]
                       (map-indexed (fn [idx ca] (if (= (inc idx) (count cds)) (assoc ca :open true) ca)) cds))))
        ;; TODO: open  column's last card
      ;; do nothing if card cannot be discarded
      app)))


;; = = = 1 = = = = = = = = = = =
;; GENERATE A STACK OF CARDS
;; = = = 1 = = = = = = = = = = =

;; each suit twice
(def suits [:hearts :diamonds :spades :clubs])

;; [suits] where an entry of suits consists of, e.g., [:hearts :hearts]
(defn cards-for-suit [suit]
  (mapcat
    (fn [value]
      ;; need to add a deck parameter to distinguish cards with the same value and suit in the same column
      [{:deck :a :suit suit :value value}
       {:deck :b :suit suit :value value}])
    (range 1 14)))

(defn shuffled-stack []
  (shuffle (mapcat cards-for-suit suits)))

(defn piles-for-suits [suits]
  (reduce (fn [memo, suit] (assoc memo suit [[] []])) {} suits))

;; initialise app state
(def app-state
  (atom
    {:stack (shuffled-stack)
     :piles (piles-for-suits suits)
     :columns (vec (map-indexed (fn [idx _] {:index idx :cards []}) (range columns#)))
     :currently_dragging [] ;; tuple of column-index, card-index !?!
    }))

(defn serve-card-to-column [state column-index & [open?]]
  (let [card (peek (:stack state))
        card (if (and open? card)
              (assoc card :open true)
              card)]
    (if card
      (-> state
          (update-in [:stack] pop)
          (update-in [:columns column-index :cards] conj card))
      ;; do nothing if stack is empty
      state)))

(defn serve-cards-to-column [state column-index n]
  (reduce
    (fn [memo val]
      (serve-card-to-column memo column-index (if (= (- n 1) val) true false)))
    state
    (range n)))

(defn serve-cards [state]
  (reduce
    (fn [state [idx n]]
      (serve-cards-to-column state idx n))
    state
    (map-indexed vector [1, 2, 3, 4, 5, 4, 3, 2, 1])))

;; set up initial state of the game
(swap! app-state serve-cards)

;; when there are no more moves, serve new cards to columns
(defn serve-new-cards [state]
  (reduce
    (fn [state i]
      (serve-card-to-column state i true))
    state
    (range columns#)))

#_(swap! app-state serve-new-cards)

(defn start-drag [card owner]
  (set! (.-innerHTML (om/get-node owner "card")) (str (label-for @card) "!")))

(defn card-view [card owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [discard-channel]}]
      (dom/li #js {:className (str "m-card" (if (open? card) " open"))
                   :onClick #(start-drag card owner)
                   :onDoubleClick (fn [e] (put! discard-channel @card))
                   :ref "card"}
        (dom/span #js {:className (name (colour card))}
          (label-for card))))))

(defn column-view [column owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [discard-channel]}]
      (dom/div #js {:className "m-column-wrapper"} ;; .m-column on the div and not the <ul> so empty columns don't disappear
        (apply dom/ul #js {:className "m-column"}
          (om/build-all card-view (:cards column) {:init-state {:discard-channel discard-channel}}))))))

(defn columns-view [columns owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [discard-channel]}]
      (dom/div #js {:className "m-columns-wrapper"}
        (apply dom/ul #js {:className "m-columns cf"}
        (om/build-all column-view columns {:init-state {:discard-channel discard-channel}}))))))

(defn navigation-view [app owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "l-navigation-container"}
        (dom/ul #js {:className "m-navigation cf"}
          (dom/li #js {:className "m-navigation--item"}
            (dom/h1 #js {:className "m-navigation--title"}
              "Irmingard"))
          (dom/li #js {:className "m-navigation--item"}
            (dom/button #js {:className "m-navigation--hit-me"
                             :onClick (fn [_] (om/transact! app serve-new-cards))} "Hit me!")))))))

(defn omingard-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:discard-channel (chan)})
    om/IWillMount
    (will-mount [_]
       (let [discard-channel (om/get-state owner :discard-channel)]
         (go (loop []
           (let [card (<! discard-channel)]
             (om/transact! app (fn [xs] (discard-card xs card)))
             (recur))))))
    om/IRenderState
    (render-state [this {:keys [discard-channel]}]
      (dom/div #js {:className "omingard-wrapper"}
        (om/build navigation-view app)
        (om/build columns-view (:columns app) {:init-state {:discard-channel discard-channel}})))))

(om/root
  omingard-view
  app-state
  {:target (. js/document (getElementById "omingard"))})


;; -- - - - - - - -reset
;; sandbox
(let [column [(card "h.K")
              (card "c.Q")
              (card "d.J")
              (card "s.10")
              (card "h.9")
              (card "c.8")
              (card "d.7")
              (card "s.6")
              (card "d.5")
              (card "c.4")
              (card "h.3")
              (card "s.2")]]
  (children-of column (card "s.2")))

(.indexOf #js [1 2 3] 3)


(vec (rest (drop-while (fn [el] (not= 9 el)) [1 2 3 4 5 6 7 8 9])))
