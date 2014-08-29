(ns omingard.setup)

;; : : : GLOBAL CONSTANTS : : : : : : : : :
(def columns# 9)
(def suits [:hearts :diamonds :spades :clubs])

(defn cards-for-suit [suit]
  "Takes a suit and creates all the cards for it.
   Cards need a deck parameter to distinguish cards
   with the same value and suit in the same column."
  (mapcat
    (fn [value]
      [{:deck :a :suit suit :value value}
       {:deck :b :suit suit :value value}])
    (range 1 14)))

(defn shuffled-stack []
  "Returns a shuffled stack of cards."
  (shuffle (mapcat cards-for-suit suits)))

(defn piles-for-suits [suits]
  "Takes a vector of suits and returns pile maps for them."
  (vec (map-indexed (fn [idx suit] {:index idx :suit suit :cards []}) suits)))

(defn serve-card-to-column [appl column-index & [is-open?]]
  (let [card (peek (:stack appl))
        card (if (and is-open? card)
               (assoc card :open true)
               card)]
    (if card
      (-> appl
          (update-in [:stack] pop)
          (update-in [:columns column-index :cards] conj card))
      ;; do nothing if stack is empty
      appl)))

(defn serve-cards-to-column [appl column-index n]
  (reduce
    (fn [memo val]
      (serve-card-to-column memo column-index (= (- n 1) val)))
    appl
    (range n)))

(defn serve-cards [appl]
  (reduce
    (fn [memo [idx cards-count]]
      (serve-cards-to-column memo idx cards-count))
    appl
    (map-indexed vector [1 2 3 4 5 4 3 2 1])))
