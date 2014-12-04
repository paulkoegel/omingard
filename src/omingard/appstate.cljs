(ns omingard.appstate
  (:require [omingard.setup :as setup]))

(defn new-app-state []
  {:stack (setup/shuffled-stack)
   :piles (setup/piles-for-suits setup/double-suits)
   :columns (vec (map-indexed (fn [idx _] {:index idx :cards []}) (range setup/columns#)))
  })

;; initial app state, all cards are on the stack.
(def app-state
  (atom (new-app-state)))

;; remember app states for undo
(def app-history (atom [@app-state]))
