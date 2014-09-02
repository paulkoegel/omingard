(ns omingard.appstate
  (:require [omingard.setup :as setup]))

;; initial app state, all cards are on the stack.
(def app-state
  (atom
    {:stack (setup/shuffled-stack)
     :piles (setup/piles-for-suits setup/double-suits)
     :columns (vec (map-indexed (fn [idx _] {:index idx :cards []}) (range setup/columns#)))
    }))

;; remember app states for undo
(def app-history (atom [@app-state]))
