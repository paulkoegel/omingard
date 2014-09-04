;; 1. Let there be cards in a stack: 1 Rummy deck (52 cards - 2-10, jack, queen, king, ace)
;; 2. shuffle stack.
;; 3. serve cards to columns
;; 4. game begins: either move a free open card from one column to another, discard aces
;;    (and after them 2s etc.) to one of eight discard piles, or serve new open cards (1 per column)
;; 5. continue until there are no more moves (you lose) or all cards have been discarded to the piles.

(ns omingardtest.test
  (:require [omingard.core :as core]
            [clojure.string :as string]
            [omingard.setup :as setup]
            [omingard.appstate :as app]
            [omingard.helpers :as helpers]
            [omingard.components.card :as card-components]))

;; HELPER FUNCTIONS

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

(defn make-card [card-string]
  "Builds a card map from a string - \"d.12.a\", e.g., creates a queen of diamonds (with deck \"a\")."
  (let [card-components (string/split card-string #"\.")
        suit (keyword (first card-components))
        value (second card-components)
        option (when (= 3 (count card-components)) (keyword (last card-components)))
        deck (when (some #{option} [:a :b]) option)
        open (when (= :o option) true)
        card {:suit
                (cond (= suit :s) :spades
                      (= suit :c) :clubs
                      (= suit :h) :hearts
                      (= suit :d) :diamonds)
              :value (value-from-literal-value value)
              :deck (or deck :a)}]
    (if open (assoc card :open true) card)))

(def scenarios [

  {:name "colour"
   :expectations [
    ["hearts"
     (= "red" (helpers/colour :hearts))]
    ["diamonds"
     (= "red" (helpers/colour :diamonds))]
    ["clubs"
     (= "black" (helpers/colour :clubs))]
    ["spades"
     (= "black" (helpers/colour :spades))]
    ["stars"
     (= nil (helpers/colour {:suit :stars}))]]}

  {:name "display-value"
   :expectations [
     ["0"
      (= nil (helpers/display-value {:value  0}))]
     ["1"
      (= "A" (helpers/display-value {:value  1}))]
     ["2" (= "2" (helpers/display-value {:value  2}))]
     ["10" (= "10" (helpers/display-value {:value 10}))]
     ["J" (= "J" (helpers/display-value {:value 11}))]
     ["Q" (= "Q" (helpers/display-value {:value 12}))]
     ["K" (= "K" (helpers/display-value {:value 13}))]
     ["nil" (= nil (helpers/display-value {:value 14}))]]}

  {:name "symbol-for-suit"
   :expectations [
     ["spades"   (= "♠" (helpers/symbol-for-suit :spades))]
     ["hearts"   (= "♥" (helpers/symbol-for-suit :hearts))]
     ["diamonds" (= "♦" (helpers/symbol-for-suit :diamonds))]
     ["clubs"    (= "♣" (helpers/symbol-for-suit :clubs))]
     ["godzilla" (= nil (helpers/symbol-for-suit :godzilla))]]}

  {:name "open?"
   :expectations [
     ["true"              (= true  (helpers/open? {:value 11 :suit "diamonds" :deck 2 :open true}))]
     ["false"             (= false (helpers/open? {:value 11 :suit "diamonds" :deck 2 :open false}))]
     ["key doesn't exist" (= nil   (helpers/open? {:value 11 :suit "diamonds" :deck 2}))]]}

  {:name "label-for"
   :expectations [
     ["King of Hearts, deck A"
      (= "♥ K" (helpers/label-for {:value 13 :suit :hearts :deck 1}))]]}

  {:name "children-of"
   :expectations
     (let [sorted-column (mapv make-card
                           ["h.K"
                            "c.Q"
                            "d.J"
                            "s.10"
                            "h.9"
                            "c.8"
                            "d.7"
                            "s.6"
                            "d.5"
                            "c.4"
                            "h.3"
                            "s.2"])
           unsorted-column (mapv make-card ["h.A" "c.K" "d.Q" "s.7" "h.2" "c.Q"])]
       [
         ["sorted column: nil"
          (= [] (helpers/children-of sorted-column nil))]
         ["sorted column: card that isn't in the column has no children"
          (= [] (helpers/children-of sorted-column (make-card "d.K")))]
         ["last card has no children"
          (= [] (helpers/children-of sorted-column (make-card "s.2")))]
         ["sorted column: one child"
          (= [(make-card "s.2")]
             (helpers/children-of sorted-column (make-card "h.3")))]
         ["sorted column: many children"
          (= (mapv make-card ["d.7" "s.6" "d.5" "c.4" "h.3" "s.2"])
             (helpers/children-of sorted-column (make-card "c.8")))]
         ["sorted column: all children"
          (= (mapv make-card ["c.Q" "d.J" "s.10" "h.9" "c.8" "d.7" "s.6" "d.5" "c.4" "h.3" "s.2"])
             (helpers/children-of sorted-column (make-card "h.K")))]

         ["unsorted column: nil"
          (= [] (helpers/children-of unsorted-column nil))]
         ["unsorted column: card that isn't in the column has no children"
          (= [] (helpers/children-of unsorted-column (make-card "s.A")))]
         ["unsorted column: last card has no children"
          (= [] (helpers/children-of unsorted-column (make-card "c.Q")))]
         ["unsorted column: one child"
           (= [(make-card "c.Q")] (helpers/children-of unsorted-column (make-card "h.2")))]
         ["unsorted column: many children"
           (= (mapv make-card ["s.7" "h.2" "c.Q"])
              (helpers/children-of unsorted-column (make-card "d.Q")))]
         ["unsorted column: all children"
           (= (mapv make-card ["c.K" "d.Q" "s.7" "h.2" "c.Q"])
              (helpers/children-of unsorted-column (make-card "h.A")))]
        ]
        )}

  {:name "with-alternating-colours?"
   :expectations
     (let [sorted-alternating-cards (mapv make-card ["d.10" "s.9" "h.8" "c.7" "d.6" "c.5" "d.4" "s.3" "h.2" "s.A"])
           unsorted-alternating-cards (mapv make-card ["h.A" "c.K" "d.Q" "s.7" "h.2" "c.Q"])
           cards-without-alternating-colours (mapv make-card ["c.A" "s.K" "d.K" "h.7" "h.10" "c.9" "c.2" "s.Q"])
           one-card-red [(make-card "d.8")]
           one-card-black [(make-card "s.8")]]
       [
         ["sorted alternating cards"
           (true? (helpers/with-alternating-colours? sorted-alternating-cards))]
         ["unsorted alternating cards"
           (true? (helpers/with-alternating-colours? unsorted-alternating-cards))]
         ["cards without alternating colours"
           (false? (helpers/with-alternating-colours? cards-without-alternating-colours))]
         ["one card: red"
           (true? (helpers/with-alternating-colours? one-card-red))]
         ["one card: black"
           (true? (helpers/with-alternating-colours? one-card-black))]
        ]
       )}

  {:name "with-descending-values?"
   :expectations
     (let [cards (mapv make-card ["d.9" "d.8" "d.7" "d.6" "d.5" "d.4" "d.3" "d.2"])]
       [
        ["sorted"
         (= true (helpers/with-descending-values? cards))]
       ])
  }


  {:name "sorted-from-card?"
   :expectations
     (let [sorted-column (mapv make-card
                           ["h.K"
                            "c.Q"
                            "d.J"
                            "s.10"
                            "h.9"
                            "c.8"
                            "d.7"
                            "s.6"
                            "d.5"
                            "c.4"
                            "h.3"
                            "s.2"])
           unsorted-column (mapv make-card
                            ["h.A" "c.K" "c.8" "s.7" "d.6" "c.5" "d.4" "s.3" "h.2"])
           another-unsorted-column (mapv make-card
                            ["h.A" "c.K" "d.2" "s.7" "d.6" "c.5" "d.4" "s.3" "h.2"])
           yet-another-unsorted-column (mapv make-card
                            ["c.2" "c.8.o" "d.7.o" "c.a.o"])]

       [
         ["a column is always sorted from its last card"
           (= true (helpers/sorted-from-card? sorted-column (make-card "s.2")))]
         ["a column is never sorted from a card that's not in that column"
           (= false (helpers/sorted-from-card? sorted-column (make-card "d.K")))]
         ["sorted from a card in the middle"
           (= true (helpers/sorted-from-card? sorted-column (make-card "h.9")))]
         ["sorted from the top"
           (= true (helpers/sorted-from-card? sorted-column (make-card "h.K")))]
         ["not sorted from one card above sorted cards - when card above has only proper value"
           (= false (helpers/sorted-from-card? unsorted-column (make-card "c.8")))]
         ["not sorted from one card above sorted cards - when card above has only proper colour"
           (= false (helpers/sorted-from-card? another-unsorted-column (make-card "d.2")))]
         ["not sorted from card in unsorted column"
           (= false (helpers/sorted-from-card? yet-another-unsorted-column (make-card "c.8.o")))]
        ])
  }

  ;; TODO: pending
  {:name "moveable?"
   :expectations [
     ["not moveable b/c it's not open" ;; nil b/c colour? fails with `nil` and the rest of the `and` doesn't get evaluated.
      (= nil (helpers/moveable? (mapv make-card ["d.9" "c.2.o"]) (make-card "d.2")))]
     ["not moveable b/c the colours are not in order"
      (= false (helpers/moveable? (mapv make-card ["c.5" "d.4.o" "h.3.o" "c.2.o"]) (make-card "d.4.o")))]
     ["not moveable b/c the values are not in order"
      (= false (helpers/moveable? (mapv make-card ["c.5" "d.7.o" "h.3.o" "c.2.o"]) (make-card "d.7.o")))]
     ["moveable"
      (= true  (helpers/moveable? (mapv make-card ["c.5" "c.4.o" "h.3.o" "c.2.o"]) (make-card "c.4.o")))]
     ]}

  ;; TODO: pending
  ;;{:name "column-for"
  ;; :expectations []}
  {:name "free-pile-for"
   :expectations
   (let [piles (setup/piles-for-suits setup/double-suits)]
     [
       ["no free pile"
        (= nil
           (helpers/free-pile-for piles (make-card "h.2")))]
       ["return first pile when both piles are empty"
        (= (piles 0)
           (helpers/free-pile-for piles (make-card "h.A")))]
       (let [piles (update-in piles [0 :cards] conj (make-card "h.A"))]
         ["return second pile when first pile is not free"
          (= (piles 1)
             (helpers/free-pile-for piles (make-card "h.A")))])
       (let [piles (update-in piles [1 :cards] conj (make-card "h.A"))]
         ["return first pile when second pile is not free - this can happen, e.g., after an ace has been put back tot a column form the first pile."
          (= (piles 0)
             (helpers/free-pile-for piles (make-card "h.A")))])
      ])}


  ;; TODO: pending
  ;;{:name "discardable?"
  ;; :expectations []}

  ;; TODO: pending
  ;;{:name "discard-card"
  ;; :expectations []}

  ;; TODO: pending
  ;;{:name "index-for-card-in-column"
  ;; :expectations []}

  ;; TODO: pending
  ;;{:name "mark-for-moving"
  ;; :expectations []}

  {:name "unmark-all-column-cards"
   :expectations [
      ["it works"
        (=
          {:columns
              [{:index 0, :cards [{:suit :clubs, :open true, :deck :a, :value 12}]}
               {:index 1,
                :cards
                [{:suit :diamonds, :deck :b, :value 1}
                 {:suit :hearts, :open true, :deck :a, :value 7}]}
               {:index 2,
                :cards
                [{:suit :clubs, :deck :a, :value 4}
                 {:suit :clubs, :deck :a, :value 13}
                 {:suit :spades, :open true, :deck :a, :value 11}]}
               {:index 3,
                :cards
                [{:suit :hearts, :deck :b, :value 2}
                 {:suit :clubs, :deck :b, :value 11}
                 {:suit :clubs, :deck :b, :value 13}
                 {:suit :hearts, :open true, :deck :a, :value 5}]}
               {:index 4,
                :cards
                [{:suit :spades, :deck :b, :value 12}
                 {:suit :clubs, :deck :b, :value 12}
                 {:suit :diamonds, :deck :a, :value 5}
                 {:suit :hearts, :deck :a, :value 10}
                 {:suit :hearts, :open true, :deck :b, :value 7}]}
               {:index 5,
                :cards
                [{:suit :clubs, :deck :b, :value 9}
                 {:suit :hearts, :deck :b, :value 4}
                 {:suit :diamonds, :deck :a, :value 12}
                 {:suit :clubs, :open true, :deck :a, :value 7}]}
               {:index 6,
                :cards
                [{:suit :spades, :deck :a, :value 2}
                 {:suit :diamonds, :deck :b, :value 9}
                 {:suit :hearts, :open true, :deck :b, :value 1}]}
               {:index 7,
                :cards
                [{:suit :clubs, :deck :b, :value 8}
                 {:suit :spades, :open true, :deck :b, :value 8}]}
               {:index 8, :cards [{:suit :hearts, :open true, :deck :a, :value 1}]}]}
          (helpers/unmark-all-column-cards
            {:columns
              [{:index 0, :cards [{:suit :clubs, :open true, :deck :a, :value 12}]}
               {:index 1,
                :cards
                [{:suit :diamonds, :deck :b, :value 1}
                 {:suit :hearts, :open true, :deck :a, :value 7, :moving true}]}
               {:index 2,
                :cards
                [{:suit :clubs, :deck :a, :value 4}
                 {:suit :clubs, :deck :a, :value 13}
                 {:suit :spades, :open true, :deck :a, :value 11}]}
               {:index 3,
                :cards
                [{:suit :hearts, :deck :b, :value 2}
                 {:suit :clubs, :deck :b, :value 11}
                 {:suit :clubs, :deck :b, :value 13}
                 {:suit :hearts, :open true, :deck :a, :value 5}]}
               {:index 4,
                :cards
                [{:suit :spades, :deck :b, :value 12}
                 {:suit :clubs, :deck :b, :value 12}
                 {:suit :diamonds, :deck :a, :value 5}
                 {:suit :hearts, :deck :a, :value 10}
                 {:suit :hearts, :open true, :deck :b, :value 7}]}
               {:index 5,
                :cards
                [{:suit :clubs, :deck :b, :value 9}
                 {:suit :hearts, :deck :b, :value 4}
                 {:suit :diamonds, :deck :a, :value 12}
                 {:suit :clubs, :open true, :deck :a, :value 7}]}
               {:index 6,
                :cards
                [{:suit :spades, :deck :a, :value 2}
                 {:suit :diamonds, :deck :b, :value 9}
                 {:suit :hearts, :open true, :deck :b, :value 1}]}
               {:index 7,
                :cards
                [{:suit :clubs, :deck :b, :value 8}
                 {:suit :spades, :open true, :deck :b, :value 8}]}
               {:index 8, :cards [{:suit :hearts, :open true, :deck :a, :value 1}]}]}))]
    ]}




  {:name "move-marked-cards-to"
   :expectations [
      ["it works"
        (=
          {:columns
            [{:index 0,
              :cards
              [{:suit :clubs, :open true, :deck :a, :value 12}
               {:suit :hearts, :open true, :deck :a, :value 7}]}
             {:index 1,
              :cards
              [{:suit :diamonds, :deck :b, :value 1, :open true}]}
             {:index 2,
              :cards
              [{:suit :clubs, :deck :a, :value 4}
               {:suit :clubs, :deck :a, :value 13}
               {:suit :spades, :open true, :deck :a, :value 11}]}
             ]}
          (helpers/move-marked-cards-to
            {:columns
              [{:index 0, :cards [{:suit :clubs, :open true, :deck :a, :value 12}]}
               {:index 1,
                :cards
                [{:suit :diamonds, :deck :b, :value 1}
                 {:suit :hearts, :open true, :deck :a, :value 7, :moving true}]}
               {:index 2,
                :cards
                [{:suit :clubs, :deck :a, :value 4}
                 {:suit :clubs, :deck :a, :value 13}
                 {:suit :spades, :open true, :deck :a, :value 11}]}]}
            {:index 0})
            )]
    ]}

  {:name "can-be-appended-to?"
   :expectations [
     ["can be appended to"
       (= true
         (helpers/can-be-appended-to? (make-card "s.7") {:cards (mapv make-card ["h.8"])}))]
     ["cannot be appended to"
       (= false
         (helpers/can-be-appended-to? (make-card "c.J") {:cards (mapv make-card ["d.K"])}))]
     ["cannot be appended to column that ends with same value"
       (= false
         (helpers/can-be-appended-to? (make-card "c.3") {:cards (mapv make-card ["s.3"])}))]
   ]}

])


(defn formatted-result [test-name expectations result]
  (str
    "<div class='test-result'>"
    test-name ": "
    (if result (str "<span class='green'>passed</span>")
               (apply str
                 (map
                   (fn [[description expectation]]
                     (str "<span class='"
                       (if expectation "green" "red")
                       "'>"
                       description
                       "</span>"))
                    expectations)))
      #_(str "<span class='red'>Failed: " (first ) (last expectations "</span>"))
    "</div>"))

(defn test-output []
  (apply str
    (map
      (fn [{scenario-name :name expectations :expectations}]
        (let [result (every? true? (map (fn [e] (last e)) expectations))]
          (formatted-result scenario-name expectations result)))
      scenarios)))

(defn onload []
  (let [output (test-output)]
    (set! (.-innerHTML (.getElementById js/document "test-output")) (str "<h1>Omingard Tests</h1><div class='output'>" output "</div>"))))

(set! (.-onload js/window) onload)



(helpers/move-marked-cards-to
            {:columns
              [{:index 0, :cards [{:suit :clubs, :open true, :deck :a, :value 12}]}
               {:index 1,
                :cards
                [{:suit :diamonds, :deck :b, :value 1}
                 {:suit :hearts, :open true, :deck :a, :value 7, :moving true}]}
               {:index 2,
                :cards
                [{:suit :clubs, :deck :a, :value 4}
                 {:suit :clubs, :deck :a, :value 13}
                 {:suit :spades, :open true, :deck :a, :value 11}]}]}
            {:index 0})
