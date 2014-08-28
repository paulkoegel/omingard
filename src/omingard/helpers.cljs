(ns omingard.helpers
  (:require [omingard.setup :as setup]
            [omingard.appstate :as app]))

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

;; TODO: consider should simply returning a pile index here - after all that's all we need in discardable?
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

(defn discardable? [app card]
  (let [column (column-for (:columns app) card)]
    (and (moveable? (:cards column) card)
         (free-pile-for (:piles app) card))))

;; only a column's last card is discardable
;; idea for improvement: clicking on the highest sorted card on
;; a pile discards all sorted cards below it automatically as well.
(defn discard-card [app card]
  (let [column (column-for (:columns app) card)]
    (cond
      (discardable? app card)
        (-> app
          (update-in [:columns (:index column) :cards]
                     pop)
          (update-in [:piles (:index (free-pile-for (:piles app) card)) :cards]
                     conj (unmark-card card))
          ;; open new last card of column
          (update-in [:columns (:index column) :cards]
                    (fn [cards]
                      (cond
                        (seq cards)
                          (assoc-in cards [(dec (count cards)) :open] true)
                        :else []))))
      :else
        (-> app
          (update-in [:columns (:index column) :cards (index-for (:cards column) card)]
                     unmark-card)) ;; do nothing if card cannot be discarded
    )))

(defn path-vector-for-card [app card]
  (let [column (column-for (:columns app) card)
        pile (pile-for (:piles app) card)]
    (cond
      column
        [:columns (:index column) :cards (index-for (:cards column) card)]
      pile
        [:piles (:index pile) :cards (index-for (:cards pile) card)]
      ;; else: the card's still in the stack and a path vector of nil is fine
  )))

#_(defn first-path [app card]
  (first (path-vector-for-card app card)))

#_(defn where-am-i? [app card]
  (let [path (first-path app card)]
    (cond
      (= :columns first-path)
        :column
      (= :piles first-path)
        :pile
      :else
        :stack)))

#_(defn in-columns? [app card]
  (let [first-path (first (path-vector-for-card app card))]
    (= :columns first-path)))

#_(defn in-piles? [app card]
  (let [first-path (first (path-vector-for-card app card))]
    (= :piles first-path)))

#_(defn in-stack? [app card]
  (let [first-path (first (path-vector-for-card app card))]
    (nil? first-path)))

(defn mark-card-for-moving [app card]
  "Find and mark a certain card for moving."
  (assoc-in app (conj (path-vector-for-card app card) :moving) true))

(defn mark-column-card-for-moving [app column-index card-index]
  "Mark a card in a column for moving and find it via its column- and card-index."
  (assoc-in app [:columns column-index :cards card-index :moving] true))

(defn mark-card-and-children-for-moving [app card]
  (let [column (column-for (:columns app) card)
        column-cards (:cards column)]
    (reduce
      (fn [memo idx] (mark-column-card-for-moving memo (:index column) idx))
      app
      (range (index-for column-cards card) (count column-cards)))))

(defn all-column-cards [app]
  "Returns a vector of all column cards."
  (reduce
    (fn [memo el]
      (apply conj memo (:cards el)))
    []
    (:columns app)))

(defn all-pile-cards [app]
  "Returns a vector of all cards in piles."
  (reduce #(apply conj %1 (:cards %2)) [] (:piles app)))

(defn all-column-and-pile-cards [app]
  (concat (all-column-cards app) (all-pile-cards app)))

(defn cards-marked-for-moving [app]
  (filter
    :moving
    (all-column-and-pile-cards app)))

(defn unmark-all-column-cards [app]
  (let [cards-to-unmark (cards-marked-for-moving app)
        columns (:columns app)]
    (reduce
      (fn [memo card]
        (let [column (column-for columns card)]
          (update-in memo
                     [:columns (:index column) :cards (index-for (:cards column) card)]
                     #(unmark-card %))))
      app
      cards-to-unmark)))

(defn can-be-appended-to? [card column]
  "Takes a card and a column and checks whether the card can be appended to the column."
  (let [upper-card (last (:cards column))
        lower-card card]
    (and (= (:value upper-card) (inc (:value lower-card)))
         (not= (card-colour upper-card) (card-colour lower-card)))))

(defn move-marked-cards-to [app new-column]
  (let [columns (:columns app)
        cards-to-move (cards-marked-for-moving app)
        top-card-to-move (first cards-to-move)
        ;; all cards to be moved are in the same column
        old-column (column-for columns top-card-to-move)
        pile (pile-for (:piles app) top-card-to-move)]
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
             (unmark-all-column-cards)))
         app
         cards-to-move)
       ;; moving a card from a pile to a column
       pile
         ;;(reduce
         ;;  (fn [memo card]
         (-> app
           (update-in [:piles (:index pile) :cards] pop)
           (update-in [:columns (:index new-column) :cards] conj top-card-to-move)
           (unmark-all-column-cards));;)
         ;;  app
         ;;  cards-to-move)

       ;; TODO: moving a card from a column to a pile via 2 clicks
     )))


;; (first (cards-marked-for-moving @app/app-state))
;; (move-marked-cards-to @app/app-state ((:columns @app/app-state) 5))


(defn serve-new-cards [app]
  "When there are no more moves, append a new open card to each column."
  (let [app (unmark-all-column-cards app)]
    (reduce
      (fn [memo i]
        (setup/serve-card-to-column memo i true))
      app
      (range setup/columns#))))


;; : : : V I E W S : : : : : : : : : :

(defn handle-column-placeholder-click [app column-index]
  (cond
    (= 13 (:value (first (cards-marked-for-moving app))))
      (move-marked-cards-to app ((:columns app) (:index column-index)))
    :else
      app))

(defn undo [app]
  (when (> (count @app/app-history) 1)
    (swap! app/app-history pop)
    (reset! app/app-state (last @app/app-history))))
