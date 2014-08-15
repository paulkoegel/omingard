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
     (= :red (o/colour {:suit :hearts}))]
    ["diamonds"
     (= :red (o/colour {:suit :diamonds}))]
    ["clubs"
     (= :black (o/colour {:suit :clubs}))]
    ["spades"
     (= :black (o/colour {:suit :spades}))]
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
     ;; TODO: add unsorted-column
     (let [sorted-column [(card "h.K")
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
       ;;"card that isn't in the column has no children"
       [
         ["card that isn't in the column has no children"
          (= [] (o/children-of sorted-column (card "d.K")))]
         [(o/children-of column (card "s.2"))
          (= [] (o/children-of sorted-column (card "s.2")))]
         ["one child"
          (= [(card "s.2")]
             (o/children-of sorted-column (card "h.3")))]
         ["many children"
          (= [(card "d.7") (card "s.6") (card "d.5") (card "c.4") (card "h.3") (card "s.2")]
             (o/children-of sorted-column (card "c.8")))]
         ["all children"
          (= [(card "c.Q") (card "d.J") (card "s.10") (card "h.9") (card "c.8") (card "d.7") (card "s.6") (card "d.5") (card "c.4") (card "h.3") (card "s.2")]
             (o/children-of sorted-column (card "h.K")))]
         ["nil"
          (= []
             (o/children-of sorted-column nil))]]
        )}
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
