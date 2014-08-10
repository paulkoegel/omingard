;; 1. Let there be cards in a stack: 1 Rummy deck (52 cards - 2-10, jack, queen, king, ace)
;; 2. shuffle stack.
;; 3. serve cards to columns
;; 4. game begins: either move a free open card from one column to another, discard aces
;;    (and after them 2s etc.) to one of eight discard piles, or serve new open cards (1 per column)
;; 5. continue until there are no more moves (you lose) or all cards have been discarded to the piles.

(ns omingardtest.test
  (:require [omingard.core]))

(js/alert (omingard.core/colour {:suit :hearts}))
