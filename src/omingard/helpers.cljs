(ns omingard.helpers
  (:require [omingard.setup :as setup]
            [omingard.appstate :as app]))

;; check taken from Modernizr here: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js
(defn is-touch-device? []
  (or (.hasOwnProperty js/window "ontouchstart")
      (and (.-DocumentTouch js/window) (= (type js/document) js/DocumentTouch))))

;; : : : HELPER FUNCTIONS : : : : : : : : :
;; returns strings b/c we can't use keywords to set CSS classes.
(defn colour [suit]
  "Returns a suit's colour as a string (not a keyword b/c we use it for CSS classes)."
  (cond
    (some #{suit} [:hearts :diamonds]) "red"
    (some #{suit} [:clubs :spades])    "black"))

(defn card-colour [{suit :suit}]
  "Returns a card's colour as a string."
  (colour suit))

(defn display-value [{value :value}]
  "Takes a card and returns their value or converted value (\"A\" for ace, \"J\" for jack etc.)."
  (cond
    (= value 1) "A"
    (and (> value 0) (< value 11)) (str value)
    (= value 11) "J"
    (= value 12) "Q"
    (= value 13) "K"))

(defn symbol-for-suit [suit]
  "Takes a suit and returns its ASCII symbol, e.g. ♠ for :spades."
  (case suit
    :spades "♠"
    :hearts "♥"
    :diamonds "♦"
    :clubs "♣"
    nil))

(defn open? [card]
  "Check whether a card is open."
  (:open card))

(defn label-for [card]
  "Returns a human-readable string for a card, e.g. \"♠ 7\""
  (str (symbol-for-suit (:suit card))
       " "
       (display-value card)))

(defn unmark-card [card]
  "Removes marking from a card."
  (dissoc card :moving))

(defn index-for [vektor card]
  "Takes a vector and a card and returns the index of the card in the vector."
  (first (keep-indexed (fn [idx el] (when (= el card) idx)) vektor)))

(defn children-of [column-cards card]
  "Returns a vector of all the cards below a certain card in a column."
  (vec (rest (drop-while
               (fn [el] (not= el card))
               column-cards))))

(defn with-alternating-colours? [cards]
  "Takes a vector of cards (not a column b/c it's usually fed with the
  result of children-of) and check whether they have alternating colours."
  (let [colours (map card-colour cards)]
    ;; JFYI: the `reduce` can return `false` if the last element of
    ;; `cards` is `false`, but this function expects to be handed cards anyway.
    ;; works when `cards` contains only one card
    (boolean (reduce
               (fn [memo colour] (if-not (= memo colour) colour (reduced false))) ;; `reduced` breaks the iteration
               (first colours)
               (rest colours))))) ;; reduce returns false or the last card's colour

(defn with-descending-values? [cards]
  "Checks whether a vector of cards is ordered by the cards' values and has no gaps."
  (let [values (map :value cards)]
    (= values
       (vec (reverse (range (:value (last cards)) (inc (:value (first cards)))))))))

(defn sorted-from-card? [column-cards card]
  "Takes a column and a card and checks whether the card and its children are sorted (i.e. with alternating colours and descending values)."
  (let [children (children-of column-cards card)]
    (cond
      (empty? children)
        (= card (last column-cards)) ;; card is either the last card in the column (true), or not in the column at all (false)
      :else
        (let [cards (cons card children)]
          (and (with-descending-values? cards)
            (with-alternating-colours? cards))))))

(defn moveable? [column-cards card]
  "Takes a column and a card and checks whether the card can be moved elsewhere."
  (and (open? card)
       (sorted-from-card? column-cards card)))

(defn pile-for [piles card]
  "Takes a vector of piles and a card and returns the pile that contains the card."
  (first
    (->> piles
         (filter
           (fn [pile] (some #{card} (:cards pile)))))))

;; TODO: consider simply returning a pile index here - after all that's all we need in discardable?
(defn free-pile-for [piles card]
  "Takes a vector of piles and a card and returns a pile where the card can be discarded."
  (first
    (->> piles
         (filter
           (fn [pile]
             (and
               (= (:suit pile) (:suit card))
               (= (count (:cards pile)) (dec (:value card)))))))))

(defn column-for [columns card]
  "Takes a vector of columns and a card and returns the column that contains the card."
  (first
    (->> columns
         (filter
           (fn [column] (some #{card} (:cards column)))))))

(defn discardable? [appl card]
  (let [column (column-for (:columns appl) card)]
    (and (= card (last (:cards column)))
         (free-pile-for (:piles appl) card))))

;; only a column's last card is discardable
(defn discard-card [appl card]
  (let [column (column-for (:columns appl) card)]
    (cond
      (discardable? appl card)
        (-> appl
          (update-in [:columns (:index column) :cards]
                     pop)
          (update-in [:piles (:index (free-pile-for (:piles appl) card)) :cards]
                     conj (unmark-card card))
          ;; open new last card of column
          (update-in [:columns (:index column) :cards]
                    (fn [cards]
                      (cond
                        (seq cards)
                          (assoc-in cards [(dec (count cards)) :open] true)
                        :else []))))
      :else
        (-> appl
          (unmark-all-cards))
    )))

(defn path-vector-for-card [appl card]
  (let [column (column-for (:columns appl) card)
        pile (pile-for (:piles appl) card)]
    (cond
      column
        [:columns (:index column) :cards (index-for (:cards column) card)]
      pile
        [:piles (:index pile) :cards (index-for (:cards pile) card)]
      ;; else: the card's still in the stack and a path vector of nil is fine
  )))

#_(defn first-path [appl card]
  (first (path-vector-for-card appl card)))

#_(defn where-am-i? [appl card]
  (let [path (first-path appl card)]
    (cond
      (= :columns first-path)
        :column
      (= :piles first-path)
        :pile
      :else
        :stack)))

#_(defn in-columns? [appl card]
  (let [first-path (first (path-vector-for-card appl card))]
    (= :columns first-path)))

#_(defn in-piles? [appl card]
  (let [first-path (first (path-vector-for-card appl card))]
    (= :piles first-path)))

#_(defn in-stack? [appl card]
  (let [first-path (first (path-vector-for-card appl card))]
    (nil? first-path)))

(defn mark-card-for-moving [appl card]
  "Find and mark a certain card for moving."
  (assoc-in appl (conj (path-vector-for-card appl card) :moving) true))

(defn mark-column-card-for-moving [appl column-index card-index]
  "Mark a card in a column for moving and find it via its column- and card-index."
  (assoc-in appl [:columns column-index :cards card-index :moving] true))

(defn mark-card-and-children-for-moving [appl card]
  (let [column (column-for (:columns appl) card)
        column-cards (:cards column)]
    (reduce
      (fn [memo idx] (mark-column-card-for-moving memo (:index column) idx))
      appl
      (range (index-for column-cards card) (count column-cards)))))

(defn all-column-cards [appl]
  "Returns a vector of all column cards."
  (reduce
    (fn [memo el]
      (apply conj memo (:cards el)))
    []
    (:columns appl)))

(defn all-pile-cards [appl]
  "Returns a vector of all cards in piles."
  (reduce #(apply conj %1 (:cards %2)) [] (:piles appl)))

(defn all-column-and-pile-cards [appl]
  (concat (all-column-cards appl) (all-pile-cards appl)))

(defn cards-marked-for-moving [appl]
  (filter
    :moving
    (all-column-and-pile-cards appl)))

(defn unmark-all-cards [appl]
  (reduce
    (fn [memo card]
      (update-in memo
                 (path-vector-for-card appl card)
                 #(unmark-card %)))
    appl
    (cards-marked-for-moving appl)))

(defn can-be-appended-to? [card column]
  "Takes a card and a column and checks whether the card can be appended to the column."
  (let [upper-card (last (:cards column))
        lower-card card]
    (and (= (:value upper-card) (inc (:value lower-card)))
         (not= (card-colour upper-card) (card-colour lower-card)))))

(defn move-marked-cards-to [appl new-column]
  (let [columns (:columns appl)
        cards-to-move (cards-marked-for-moving appl)
        top-card-to-move (first cards-to-move)
        ;; all cards to be moved are in the same column
        old-column (column-for columns top-card-to-move)
        pile (pile-for (:piles appl) top-card-to-move)]
    (cond
      ;; moving a card from one column to another
      old-column
       (reduce
         (fn [memo card]
           (-> memo
             (update-in [:columns (:index old-column) :cards] pop)
             (update-in [:columns (:index old-column) :cards]
                        #(if (seq %)
                          (assoc-in % [(dec (count %)) :open] true)
                          []))
             (update-in [:columns (:index new-column) :cards] conj card)
             (unmark-all-cards)))
         appl
         cards-to-move)
       ;; moving a card from a pile to a column
       pile
         ;;(reduce
         ;;  (fn [memo card]
         (-> appl
           (update-in [:piles (:index pile) :cards] pop)
           (update-in [:columns (:index new-column) :cards] conj top-card-to-move)
           (unmark-all-cards));;)
         ;;  app
         ;;  cards-to-move)

       ;; TODO: moving a card from a column to a pile via 2 clicks
     )))


;; (first (cards-marked-for-moving @app/app-state))
;; (move-marked-cards-to @app/app-state ((:columns @app/app-state) 5))


(defn serve-new-cards [appl]
  "When there are no more moves, append a new open card to each column."
  (let [appl (unmark-all-cards appl)]
    (reduce
      (fn [memo i]
        (setup/serve-card-to-column memo i true))
      appl
      (range setup/columns#))))


;; : : : V I E W S : : : : : : : : : :

(defn handle-column-placeholder-click [appl column-index]
  (cond
    (= 13 (:value (first (cards-marked-for-moving appl))))
      (move-marked-cards-to appl ((:columns appl) (:index column-index)))
    :else
      appl))

(defn undo [appl]
  (when (> (count @app/app-history) 1)
    (swap! app/app-history pop)
    (reset! app/app-state (last @app/app-history))))
