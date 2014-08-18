;; 1. Let there be cards in a stack: 2 Rummy decks (104 cards - ace, 2-10, jack, queen, king; each suit twice)
;; 2. Shuffle stack.
;; 3. Serve cards to columns
;; 4. Game begins: either move a free open card from one column to another, discard aces
;;    (and after them 2s etc.) to one of eight discard piles, or serve new open cards (1 per column)
;; 5. Continue until there are no more moves or all cards have been discarded to the piles.

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
;; returns strings b/c we can't use keywords to set CSS classes.
(defn colour [suit]
  (cond
    (some #{suit} [:hearts :diamonds]) "red"
    (some #{suit} [:clubs :spades])    "black"))

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

;; [cards, not column] usually fed with the result of children-of
(defn with-alternating-colours? [cards]
  (let [colours (map (fn [card] (colour (:suit card))) cards)]
    ;; potential problem with reduce is that it'll return `false` if the last element
    ;; of cards is `false`, but this function expects to be handed card maps.
    ;; works when cards contains only one card
    (if (reduce
          (fn [memo colour] (if (not= memo colour) colour (reduced false))) ;; `reduced` breaks the iteration
          (first colours)
          (rest colours)) ;; reduce returns false or the last card's colour
         true
         false)))

(defn sorted-from-card? [column card]
  (let [children (children-of column card)]
    (if (empty? children)
      (if (= card (last column)) true false)
      (let [cards (cons card children)]
        (and (= cards (reverse (sort-by #(:value %) cards)))
             (with-alternating-colours? children))))))

(defn moveable? [column card]
  (and (open? card)
       (sorted-from-card? (:cards column) card)))

(defn free-pile-for [piles card]
  (first
    (->> piles
         (filter
           (fn [pile]
             (and
               (= (:suit pile) (:suit card))
               (= (count (:cards pile)) (dec (:value card)))))))))


;; DISCARD CARDS - - - - - - -

(defn column-for [columns card]
  (first (filter
    (fn [column] (some #{card} (:cards column)))
    columns)))

(defn discardable? [app card]
  ;; TODO: implement real check
  (and (moveable? (column-for (:columns app) card) card)
       (free-pile-for (:piles app) card)))

;; only a column's last card is discardable
;; idea for improvement: clicking on the highest sorted card on
;; a pile discards all sorted cards below it automatically as well.
(defn discard-card [app card]
  (let [column (column-for (:columns app) card)]
    (if (discardable? app card)
      (-> app
        (update-in [:columns (:index column) :cards] pop)
        (update-in [:piles (:index (free-pile-for (:piles app) card)) :cards] conj card)
        ;; open new last card of column
        (update-in [:columns (:index column) :cards]
                     (fn [cds]
                       (assoc-in cds [(dec (count cds)) :open?] true))))
      app ;; do nothing if card cannot be discarded
    )))

(defn index-for-card-in-column [column card]
  (first (keep-indexed (fn [idx el] (when (= el card) idx)) (:cards column))))

(defn mark-for-moving [app card]
  (let [column (column-for (:columns app) card)]
    (-> app
      (assoc-in [:columns (:index column) :cards (index-for-card-in-column column card) :move-it] true))))

;; card has already been dereferenced - otherwise we get "Cannot manipulate cursor outside of render phase", only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed"" errors.
(defn handle-card-click [_event channel card]
  (if (open? card)
    (put! channel [mark-for-moving card])))


;; = = = 1 = = = = = = = = = = =
;; GENERATE A STACK OF CARDS
;; = = = 1 = = = = = = = = = = =

(def suits [:hearts :diamonds :spades :clubs])

(defn cards-for-suit [suit]
  (mapcat
    (fn [value]
      ;; need a deck parameter to distinguish cards with the same value and suit in the same column
      [{:deck :a :suit suit :value value}
       {:deck :b :suit suit :value value}])
    (range 1 14)))

(defn shuffled-stack []
  (shuffle (mapcat cards-for-suit suits)))

(defn piles-for-suits [suits]
  (vec (map-indexed (fn [idx suit] {:index idx :suit suit :cards []}) suits)))

;; initialise app state
(def app-state
  (atom
    {:stack (shuffled-stack)
     :piles (piles-for-suits (mapcat (fn [suit] [suit suit]) suits))
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
    (map-indexed vector [1 2 3 4 5 4 3 2 1])))

;; set up initial state of the game
(swap! app-state serve-cards)

;; when there are no more moves, serve new cards to columns
(defn serve-new-cards [state]
  (reduce
    (fn [memo i]
      (serve-card-to-column memo i true))
    state
    (range columns#)))

(defn card-view [card owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (dom/li #js {:className (str "m-card" (if (open? card) " open") (if (:move-it card) " move-it"))
                   :onClick (fn [event] (handle-card-click event channel @card))
                   :onDoubleClick (fn [e] (put! channel [discard-card @card]))
                   :ref "card"}
        (dom/span #js {:className (colour (:suit card))}
          (label-for card))))))

(defn column-view [column owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (dom/div #js {:className "m-column-wrapper"} ;; .m-column on the div and not the <ul> so empty columns don't disappear
        (apply dom/ul #js {:className "m-column"}
          (om/build-all card-view (:cards column) {:init-state {:channel channel}}))))))

(defn columns-view [columns owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (dom/div #js {:className "m-columns-wrapper"}
        (apply dom/ul #js {:className "m-columns cf"}
        (om/build-all column-view columns {:init-state {:channel channel}}))))))

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

(defn pile-view [pile owner]
  (reify
    om/IRender
    (render [this]
      (dom/li #js {:className "m-pile"}
        (let [cards (:cards pile)]
          (if (seq cards)
            (apply dom/ul #js {:className "m-pile--cards"}
              (om/build-all card-view cards))
            ;; pile has no cards
            (let [suit (:suit pile)]
              (dom/span #js {:className (str "m-pile--placeholder " (colour suit))}
                (symbol-for-suit suit)))))))))

(defn piles-view [piles owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "l-piles-container"}
        (dom/h3 nil "Piles")
        (apply dom/ul #js {:className "m-piles cf"}
          (om/build-all pile-view piles))))))

(defn omingard-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:channel (chan)})
    om/IWillMount
    (will-mount [_]
       (let [channel (om/get-state owner :channel)]
         (go (loop []
           (let [[func & attrs] (<! channel)]
             (om/transact! app (fn [xs] (apply func xs attrs))))
           (recur)))))
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (dom/div #js {:className "omingard-wrapper"}
        (om/build navigation-view app)
        (dom/div #js {:className "l-game-container"}
          (om/build columns-view (:columns app) {:init-state {:channel channel}})
          (om/build piles-view (:piles app))))
    )))

(om/root
  omingard-view
  app-state
  {:target (. js/document (getElementById "omingard"))})
