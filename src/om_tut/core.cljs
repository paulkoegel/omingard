;; 1. Let there be cards in a stack: 1 Rummy deck (52 cards - 2-10, jack, queen, king, ace)
;; 2. shuffle stack.
;; 3. serve cards to columns
;; 4. game begins: either move a free open card from one column to another, discard aces
;;    (and after them 2s etc.) to one of eight discard piles, or serve new open cards (1 per column)
;; 5. continue until there are no more moves (you lose) or all cards have been discarded to the piles.


(ns om-tut.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.data :as data]
            [clojure.string :as string]))

(enable-console-print!)


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
    (< value 11) (str value)
    (= value 11) "J"
    (= value 12) "Q"
    (= value 13) "K"))

(defn symbol-for-suit [suit]
  (case suit
    :spades "♠"
    :hearts "♥"
    :diamonds "♦"
    :clubs "♣"))

(defn open? [card]
  (:open card))

(defn children-of [column card]
  (let [children (vec (last (partition-by (fn [el] (= el card)) column)))]
    (if (= children column)
      [] ;; card's not included in that column
      children
      )))

(defn with-alternating-colours? [cards]
  (let [colours (map #(colour %) cards)]
    ;; problem with the reduce function is that it'll return false if the last element
    ;; of an alternating sequence is `false`.
    ;; works when cards contains only one card
    (reduce
      (fn [memo colour] (if (not= memo colour) colour (reduced false))) ;; `reduced` breaks the iteration
      (first colours)
      (rest colours))))

(defn sorted-children? [column card]
  (let [children (children-of column card)]
    ;; what if there are no children?
    (and (= children (sort-by #(:value %) children))
         (with-alternating-colours? children))))

(defn moveable? [column card]
  (and (open? card) (sorted-children? column card)))

;; [app card]
#_(defn free-pile-for [{piles :piles} card]
  (first
    (->> ((:value card) piles) filter
      (fn [pile]
        (and (= (:suit pile) (:suit card))
             (= (count pile) (dec (:value card))))))))

;; dereffing to the max - not applicable in free-pile-for as (:value card) cannot be used for destructuring - can it?
;; (def state {:piles {:hearts [[] []]}})
;; (defn x [{{pile :hearts} :piles}] pile)
;; (x state)

#_(defn discardable? [app card]
  (if (and (moveable? card) (pile-for card))
  ))

#_(defn discardable? [{piles :piles} state
                    card]
  (let [target-pile (pile-index-for-discarding piles card)]
    (and (:open card) target-pile)))

;; (pile-index-for-discarding ((:piles @app-state) {:suit :hearts :value 1}))

;;(.indexOf (apply array [1 2 3]) 2)


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
      [{:deck 1 :suit suit :value value}
       {:deck 2 :suit suit :value value}])
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
     :currently_dragging [] ;; tuple of clolum-index, card-index !?!
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


;; DISCARD CARDS - - - - - - - - - -

;; only a column's last card is discardable
;; idea for improvement: clicking on the highest sorted card on
;; a pile discards all sorted cards below it automatically as well.
#_(defn discard-card [state column-index]
  (let [card (-> state :columns (nth column-index) last)
        target-pile (pile-for-card state card)]
    (if (discardable? card)
      (-> state
          (update-in [:columns column-index] pop))
          (update-in [:piles] )
      ;; do nothing if the card cannot be discarded
      state)))

#_(discard-card @app-state 0)

(defn start-drag [card owner]
  (set! (.-innerHTML (om/get-node owner "card")) "AAAAAAA"))

(defn card-view [card owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [discard-channel]}]
      (dom/li #js {:className (str "m-card" (if (open? card) " open"))
                   :onClick #(start-drag card owner)
                   :onDoubleClick (fn [e] (put! discard-channel @card))
                   :ref "card"}
        (dom/span #js {:className (name (colour card))}
          (str (symbol-for-suit (:suit card)) " " (display-value card) " (" (:deck card) ")"))))))

(defn column-view [column owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [discard-channel]}]
      (apply dom/ul #js {:className "m-column"}
        (om/build-all card-view (:cards column) {:init-state {:discard-channel discard-channel}})))))

(defn columns-view [columns owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [discard-channel]}]
      (apply dom/ul #js {:className "m-columns"}
        (om/build-all column-view columns {:init-state {:discard-channel discard-channel}})))))

;; [app card]
(defn column-for [{columns :columns} card]
  (first (filter
    (fn [column] (some #{card} (:cards column)))
    columns)))

(defn discardable? [column card]
  ;; TODO: implement real check
  true)

(defn discard-card [app card]
  (let [column (column-for app card)]
    (if (discardable? column card)
      (-> app
        (update-in [:columns (:index column) :cards] pop)
        (update-in [:piles 0] conj card))
      ;; do nothing if card cannot be discarded
      app)))

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
        (om/build columns-view (:columns app) {:init-state {:discard-channel discard-channel}})
        (dom/button #js {:onClick (fn [_] (om/transact! app serve-new-cards))} "Hit me!")))))

(om/root
  omingard-view
  app-state
  {:target (. js/document (getElementById "omingard"))})
