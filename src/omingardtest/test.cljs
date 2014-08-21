;; 1. Let there be cards in a stack: 1 Rummy deck (52 cards - 2-10, jack, queen, king, ace)
;; 2. shuffle stack.
;; 3. serve cards to columns
;; 4. game begins: either move a free open card from one column to another, discard aces
;;    (and after them 2s etc.) to one of eight discard piles, or serve new open cards (1 per column)
;; 5. continue until there are no more moves (you lose) or all cards have been discarded to the piles.

(ns omingardtest.test
  (:require [omingard.core :as o]
            [clojure.string :as string]))

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

(def scenarios [

  {:name "colour"
   :expectations [
    ["hearts"
     (= "red" (o/colour :hearts))]
    ["diamonds"
     (= "red" (o/colour :diamonds))]
    ["clubs"
     (= "black" (o/colour :clubs))]
    ["spades"
     (= "black" (o/colour :spades))]
    ["stars"
     (= nil (o/colour {:suit :stars}))]]}

  {:name "display-value"
   :expectations [
     ["0"
      (= nil (o/display-value {:value  0}))]
     ["1"
      (= "A" (o/display-value {:value  1}))]
     ["2" (= "2" (o/display-value {:value  2}))]
     ["10" (= "10" (o/display-value {:value 10}))]
     ["J" (= "J" (o/display-value {:value 11}))]
     ["Q" (= "Q" (o/display-value {:value 12}))]
     ["K" (= "K" (o/display-value {:value 13}))]
     ["nil" (= nil (o/display-value {:value 14}))]]}

  {:name "symbol-for-suit"
   :expectations [
     ["spades"   (= "♠" (o/symbol-for-suit :spades))]
     ["hearts"   (= "♥" (o/symbol-for-suit :hearts))]
     ["diamonds" (= "♦" (o/symbol-for-suit :diamonds))]
     ["clubs"    (= "♣" (o/symbol-for-suit :clubs))]
     ["godzilla" (= nil (o/symbol-for-suit :godzilla))]]}

  {:name "open?"
   :expectations [
     ["true"              (= true  (o/open? {:value 11 :suit "diamonds" :deck 2 :open true}))]
     ["false"             (= false (o/open? {:value 11 :suit "diamonds" :deck 2 :open false}))]
     ["key doesn't exist" (= nil   (o/open? {:value 11 :suit "diamonds" :deck 2}))]]}

  {:name "label-for"
   :expectations [
     ["King of Hearts, deck A" (= "♥ K (1)" (o/label-for {:value 13 :suit :hearts :deck 1}))]]}

  {:name "children-of"
   :expectations
     (let [sorted-column (map card
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
           unsorted-column (map card ["h.A" "c.K" "d.Q" "s.7" "h.2" "c.Q"])]
       [
         ["sorted column: nil"
          (= [] (o/children-of sorted-column nil))]
         ["sorted column: card that isn't in the column has no children"
          (= [] (o/children-of sorted-column (card "d.K")))]
         ["last card has no children"
          (= [] (o/children-of sorted-column (card "s.2")))]
         ["sorted column: one child"
          (= [(card "s.2")]
             (o/children-of sorted-column (card "h.3")))]
         ["sorted column: many children"
          (= (map card ["d.7" "s.6" "d.5" "c.4" "h.3" "s.2"])
             (o/children-of sorted-column (card "c.8")))]
         ["sorted column: all children"
          (= (map card ["c.Q" "d.J" "s.10" "h.9" "c.8" "d.7" "s.6" "d.5" "c.4" "h.3" "s.2"])
             (o/children-of sorted-column (card "h.K")))]

         ["unsorted column: nil"
          (= [] (o/children-of unsorted-column nil))]
         ["unsorted column: card that isn't in the column has no children"
          (= [] (o/children-of unsorted-column (card "s.A")))]
         ["unsorted column: last card has no children"
          (= [] (o/children-of unsorted-column (card "c.Q")))]
         ["unsorted column: one child"
           (= [(card "c.Q")] (o/children-of unsorted-column (card "h.2")))]
         ["unsorted column: many children"
           (= (map card ["s.7" "h.2" "c.Q"])
              (o/children-of unsorted-column (card "d.Q")))]
         ["unsorted column: all children"
           (= (map card ["c.K" "d.Q" "s.7" "h.2" "c.Q"])
              (o/children-of unsorted-column (card "h.A")))]
        ]
        )}

  {:name "with-alternating-colours?"
   :expectations
     (let [sorted-alternating-cards (map card ["d.10" "s.9" "h.8" "c.7" "d.6" "c.5" "d.4" "s.3" "h.2" "s.A"])
           unsorted-alternating-cards (map card ["h.A" "c.K" "d.Q" "s.7" "h.2" "c.Q"])
           cards-without-alternating-colours (map card ["c.A" "s.K" "d.K" "h.7" "h.10" "c.9" "c.2" "s.Q"])
           one-card-red [(card "d.8")]
           one-card-black [(card "s.8")]]
       [
         ["sorted alternating cards"
           (true? (o/with-alternating-colours? sorted-alternating-cards))]
         ["unsorted alternating cards"
           (true? (o/with-alternating-colours? unsorted-alternating-cards))]
         ["cards without alternating colours"
           (false? (o/with-alternating-colours? cards-without-alternating-colours))]
         ["one card: red"
           (true? (o/with-alternating-colours? one-card-red))]
         ["one card: black"
           (true? (o/with-alternating-colours? one-card-black))]
        ]
       )}

  {:name "sorted-from-card?"
   :expectations
     (let [sorted-column (map card
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
           unsorted-column (map card
                            ["h.A" "c.K" "c.8" "s.7" "d.6" "c.5" "d.4" "s.3" "h.2"])
           another-unsorted-column (map card
                            ["h.A" "c.K" "d.2" "s.7" "d.6" "c.5" "d.4" "s.3" "h.2"])]
       [
         ["a column is always sorted from its last card"
           (= true (o/sorted-from-card? sorted-column (card "s.2")))]
         ["a column is never sorted from a card that's not in that column"
           (= false (o/sorted-from-card? sorted-column (card "d.K")))]
         ["sorted from a card in the middle"
           (= true (o/sorted-from-card? sorted-column (card "h.9")))]
         ["sorted from the top"
           (= true (o/sorted-from-card? sorted-column (card "h.K")))]
         ["not sorted from one card above sorted cards - when card above has only proper value"
           (= false (o/sorted-from-card? unsorted-column (card "c.8")))]
         ["not sorted from one card above sorted cards - when card above has only proper colour"
           (= false (o/sorted-from-card? another-unsorted-column (card "d.2")))]
        ]
       )
  }

  {:name "unmark-all-cards"
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
          (o/unmark-all-cards
            {:columns
              [{:index 0, :cards [{:suit :clubs, :open true, :deck :a, :value 12}]}
               {:index 1,
                :cards
                [{:suit :diamonds, :deck :b, :value 1}
                 {:suit :hearts, :open true, :deck :a, :value 7, :move-it true}]}
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
               {:suit :hearts, :open true, :deck :a, :value 7, :move-it true}]}
             {:index 1,
              :cards
              [{:suit :diamonds, :deck :b, :value 1}]}
             {:index 2,
              :cards
              [{:suit :clubs, :deck :a, :value 4}
               {:suit :clubs, :deck :a, :value 13}
               {:suit :spades, :open true, :deck :a, :value 11}]}
             ]}
          (o/move-marked-cards-to
            {:columns
              [{:index 0, :cards [{:suit :clubs, :open true, :deck :a, :value 12}]}
               {:index 1,
                :cards
                [{:suit :diamonds, :deck :b, :value 1}
                 {:suit :hearts, :open true, :deck :a, :value 7, :move-it true}]}
               {:index 2,
                :cards
                [{:suit :clubs, :deck :a, :value 4}
                 {:suit :clubs, :deck :a, :value 13}
                 {:suit :spades, :open true, :deck :a, :value 11}]}]}
            {:index 0})
            )]
    ]}
  {:name "can-be-placed-below?"
   :expectations [
     ["can be placed below"
       (= true
          (o/can-be-placed-below? (card "s.7") (card "h.8")))]
     ["cannot be placed below"
       (= false
          (o/can-be-placed-below? (card "c.J") (card "d.K")))]]}
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
