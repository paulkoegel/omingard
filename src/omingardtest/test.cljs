;; 1. Let there be cards in a stack: 1 Rummy deck (52 cards - 2-10, jack, queen, king, ace)
;; 2. shuffle stack.
;; 3. serve cards to columns
;; 4. game begins: either move a free open card from one column to another, discard aces
;;    (and after them 2s etc.) to one of eight discard piles, or serve new open cards (1 per column)
;; 5. continue until there are no more moves (you lose) or all cards have been discarded to the piles.

(ns omingardtest.test
  (:require [omingard.core :as o]
            [clojure.string :as string]))

(def scenarios [
  {:name "colour"
   :expectations [
    (= (o/colour {:suit :hearts})
       :red)
    (= (o/colour {:suit :diamonds})
       :red)
    (= (o/colour {:suit :clubs})
       :black)
    (= (o/colour {:suit :spades})
       :black)
    (= (o/colour {:suit :stars})
       nil)]}

  {:name "display-value"
   :expectations [
     (= (o/display-value {:value  0})
        nil)
     (= (o/display-value {:value  1})
        "A")
     (= (o/display-value {:value  2})
        "2")
     (= (o/display-value {:value 10})
        "10")
     (= (o/display-value {:value 11})
        "J")
     (= (o/display-value {:value 12})
        "Q")
     (= (o/display-value {:value 13})
        "K")
     (= (o/display-value {:value 14})
        nil)]}

  {:name "symbol-for-suit"
   :expectations [
     (= (o/symbol-for-suit :spades)
        "♠")
     (= (o/symbol-for-suit :hearts)
        "♥")
     (= (o/symbol-for-suit :diamonds)
        "♦")
     (= (o/symbol-for-suit :clubs)
        "♣")
     (= (o/symbol-for-suit :godzilla)
        nil)]}

  {:name "open?"
   :expectations [
     (= (o/open? {:value 11 :suit "diamonds" :deck 2 :open true})
        true)
     (= (o/open? {:value 11 :suit "diamonds" :deck 2 :open false})
        false)
     (= (o/open? {:value 11 :suit "diamonds" :deck 2})
        nil)]}

  {:name "label-for-test"
   :expectations [
     (= (o/label-for {:value 13 :suit :hearts :deck 1})
        "♥ K (1)")]}
])

(defn formatted-result [test-name errors result]
  (str
    "<div class='test-result'>"
    test-name ": "
    (if result (str "<span class='green'>passed</span>")
               (str "<span class='red'>Failed: " errors "</span>"))
    "</div>"))


(defn test-output []
  (string/join
    (map
      (fn [{scenario-name :name expectations :expectations}]
        (let [result (every? true? expectations)]
          (formatted-result scenario-name expectations result)))
      scenarios)))

(defn onload []
  (let [output (test-output)]
    (set! (.-innerHTML (.getElementById js/document "test-output")) (str "<h1>Omingard Tests</h1><div class='output'>" output "</div>"))))

(set! (.-onload js/window) onload)
