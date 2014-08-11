;; 1. Let there be cards in a stack: 1 Rummy deck (52 cards - 2-10, jack, queen, king, ace)
;; 2. shuffle stack.
;; 3. serve cards to columns
;; 4. game begins: either move a free open card from one column to another, discard aces
;;    (and after them 2s etc.) to one of eight discard piles, or serve new open cards (1 per column)
;; 5. continue until there are no more moves (you lose) or all cards have been discarded to the piles.

(ns omingardtest.test
  (:require [omingard.core :as o]))

(defn print-result [test-name expectations result]
  (str test-name ": " (if result (str "<span class='green'>passed</span>") (str "<span class='red'>Failed: " expectations "</span>"))))

(def tests [
  (defn colour-test []
    (let [
      expectations [
        (= (o/colour {:suit :hearts}) :red)
        (= (o/colour {:suit :diamonds}) :red)
        (= (o/colour {:suit :clubs}) :black)
        (= (o/colour {:suit :spades}) :black)
        (= (o/colour {:suit :stars}) nil)]
      result (every? true? expectations)]
        (print-result "colour" expectations result)))

  (defn display-value-test []
    (let [
      expectations
        [
          (= (o/display-value {:value  0}) nil)
          (= (o/display-value {:value  1}) "A")
          (= (o/display-value {:value  2}) "2")
          (= (o/display-value {:value 10}) "10")
          (= (o/display-value {:value 11}) "J")
          (= (o/display-value {:value 12}) "Q")
          (= (o/display-value {:value 13}) "K")
          (= (o/display-value {:value 14}) nil)]
      result (every? true? expectations)]
        (print-result "display-value" expectations result)))

  (defn symbol-for-suit-test []
    (let [expectations[
        (= (o/symbol-for-suit :spades)
           "♠")
        (= (o/symbol-for-suit :hearts)
           "♥")
        (= (o/symbol-for-suit :diamonds)
           "♦")
        (= (o/symbol-for-suit :clubs)
           "♣")
        (= (o/symbol-for-suit :godzilla)
           nil)]
      result (every? true? expectations)]
        (print-result "symbol-for-suit" expectations result)))

  (defn open?-test []
    (let [expectations [
        (= (o/open? {:value 11 :suit "diamonds" :deck 2 :open true})
           true)
        (= (o/open? {:value 11 :suit "diamonds" :deck 2 :open false})
           false)
        (= (o/open? {:value 11 :suit "diamonds" :deck 2})
           nil)]
      result (every? true? expectations)]
        (print-result "open?" expectations result)))

  (defn label-for-test []
    (let [expectations [
        (= (o/label-for {:value 13 :suit :hearts :deck 1})
           "♥ K (1)")]
      result (every? true? expectations)]
        (print-result "label-for" expectations result)))
])

(defn onload []
  (let [output
          (fn []
            (reduce (fn [memo test] (str memo "\n<div class='test-result'>" (test) "</div>")) "" tests))]
    (set! (.-innerHTML (.getElementById js/document "test-output")) (str "<h1>Omingard Tests</h1><div class='output'>" (output) "</div>"))))

(set! (.-onload js/window) onload)
