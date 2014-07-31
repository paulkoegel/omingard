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

(defn colour [{suit :suit} card]
  (if (some #{suit} [:hearts :diamonds])
    :red
    :black))

;; generate a stack of cards
(def suits (mapcat (fn [suit] [suit, suit]) [:hearts :diamonds :spades :clubs]))

(defn card-map [suit]
  (map
    (fn [value]
      {:suit suit :value value})
    (range 1 12)))

(defn suit-map [suits] (map card-map suits))

(defn shuffled-stack []
  (shuffle (vec (flatten (suit-map suits)))))

;; initialise app state
(def app-state
  (atom
    {:stack (shuffled-stack)
     :piles (mapv (fn [suit] {suit []}) suits)
     :columns (mapv (fn [_] []) (range columns#))
     :currently_dragging [] ;; tuple of clolum-index, card-index !?!
    }))

(defn serve-card-to-column [state column-index & [open?]]
  (let [card (peek (:stack state))
        card (if (and open? card)
              (assoc card :open true)
              card)]
    (js/console.log "serve-card-to-column" column-index open?)
    (if card
      (-> state
          (update-in [:stack] pop)
          (update-in [:columns column-index] conj card))
      state ;; do nothing if stack is empty
      )))

(defn serve-cards-to-column [state column-index n]
  (js/console.log "serve-cards-to-column" column-index n)
  (reduce
    (fn [memo val]
      (js/console.log "inside reduce" val)
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

#_(defn discardable? [{piles :piles} state
                    card]
  (let [target-pile (pile-index-for-discarding piles card)]
    (and (:open card) target-pile)))

;; (pile-index-for-discarding ((:piles @app-state) {:suit :hearts :value 1}))

;;(.indexOf (apply array [1 2 3]) 2)


#_(defn pile-index-for-discarding [piles card]
  (let [cards-suit (:suit card)
        cards-value (:value card)
        target-pile (first (filter #(and (= cards-suit (:suit %)) (= cards-value (:value %))) piles))]
    (.indexOf (apply array piles) target-pile)))
  ;;(->> piles
  ;;    (filter
  ;;       (fn)
  ;;      )))

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

(defn start-drag [app owner & aaa]
  (js/console.log app)
  (js/console.log owner)
  (set! (.-innerHTML (om/get-node owner "card")) "AAAAAAA"))

(defn card-view [card owner]
  (reify
    om/IRender
    (render [this]
      (dom/li #js {:className (str "m-card" (if (:open card) " open" nil))
                   :onClick #(start-drag card owner)}
        (dom/span #js {:className (name (colour card))}
          (str (symbol-for-suit (:suit card)) " " (:value card)))))))

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
