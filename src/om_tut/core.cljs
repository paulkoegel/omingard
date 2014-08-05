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
    (some #{suit} [:clubs :spades])    :black
    :else nil))

;; replaces certain values with "J" (jack) etc.
;; [card]
(defn display-value [{value :value}]
  (cond
    (= value 1) "A"
    (< value 11) value
    (= value 11) "J"
    (= value 12) "Q"
    (= value 13) "K"))

(defn moveable? [column card]
  )

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

(def dual-suits (mapcat (fn [suit] [suit, suit]) [:hearts :diamonds :spades :clubs]))

(defn cards-for-suit [suit]
  (mapv
    (fn [value]
      {:suit suit :value value})
    (range 1 14)))

(defn shuffled-stack []
  (shuffle (mapcat cards-for-suit dual-suits)))

(defn piles-for-suits [suits]
  (reduce (fn [memo, suit] (assoc memo suit [[] []])) {} suits))

;; initialise app state
(def app-state
  (atom
    {:stack (shuffled-stack)
     :piles (piles-for-suits suits)
     :columns (mapv (fn [_] []) (range columns#))
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
          (update-in [:columns column-index] conj card))
      state ;; do nothing if stack is empty
      )))

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


(defn symbol-for-suit [suit]
  (case suit
    :spades "♠"
    :hearts "♥"
    :diamonds "♦"
    :clubs "♣"))

(defn start-drag [card owner]
  (set! (.-innerHTML (om/get-node owner "card")) "AAAAAAA"))

(defn say-hello []
  (js/console.log "hello"))

(defn card-view [card owner]
  (reify
    om/IRender
    (render [this]
      (dom/li #js {:className (str "m-card" (if (:open card) " open" nil))
                   :onClick #(start-drag card owner)
                   :onDblClick #(say-hello)
                   :ref "card"}
        (dom/span #js {:className (name (colour card))}
          (str (symbol-for-suit (:suit card)) " " (display-value card)))))))

(defn column-view [column owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/ul #js {:className "m-column"}
        (om/build-all card-view column)))))

(defn columns-view [app owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/ul #js {:className "m-columns"}
        (om/build-all column-view (:columns app))))))

(defn omingard-view [app owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "omingard-wrapper"}
        (om/build columns-view app)))))

(om/root
  omingard-view
  app-state
  {:target (. js/document (getElementById "omingard"))})
