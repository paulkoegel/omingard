;; 1. Set up:
;;    a. Let there be cards in a stack: 2 Rummy decks (104 cards - ace, 2-10, jack, queen, king; each suit twice)
;;    b. Shuffle the stack.
;;    c. Serve cards to columns.
;; 2. Game loop: either move a free open card from one column to another, discard aces
;;    (and after them 2s etc.) to one of eight discard piles, or serve new open cards (1 per column)
;; 3. End of game: continue until there are no more moves or all cards have been discarded to the piles.

(ns omingard.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.data :as data]
            [clojure.string :as string]))

(enable-console-print!)
(js/React.initializeTouchEvents true)

;; : : : DEBUGGING HELPERS : : : : : : : : :

      (defn debugg [app text]
        (update-in app [:debug-texts] (fn [a] (cons text a))))

      ;; transforms "J" etc. back to 11 etc.
      (defn value-from-literal-value [literal-value]
        (let [literal-value (string/lower-case literal-value)]
          (cond
            (= literal-value "a") 1
            (= literal-value "j") 11
            (= literal-value "q") 12
            (= literal-value "k") 13
            :else (js/parseInt literal-value))))

      ;; "d.12.a" creates a queen of diamonds (with deck "a") card; "c.2.o", an open 2 of clubs.
      (defn ccard [card-string]
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
;; - - END -- DEBUGGING HELPERS : : : : : :



;; : : : GLOBAL CONSTANTS : : : : : : : : :
(def columns# 9)


;; : : : 1. GENERATE A STACK OF CARDS : : :

(def suits [:hearts :diamonds :spades :clubs])

(defn cards-for-suit [suit]
  (mapcat
    (fn [value]
      ;; need a deck parameter to distinguish cards with the same value and suit in the same column
      [{:deck :a :suit suit :value value}
       {:deck :b :suit suit :value value}])
    (range 1 14)))

(defn shuffled-stack []
  (shuffle (mapcat cards-for-suit suits)))

(defn piles-for-suits [suits]
  (vec (map-indexed (fn [idx suit] {:index idx :suit suit :cards []}) suits)))

;; initialise app state
(def app-state
  (atom
    {:stack (shuffled-stack)
     :piles (piles-for-suits (mapcat (fn [suit] [suit suit]) suits))
     :columns (vec (map-indexed (fn [idx _] {:index idx :cards []}) (range columns#)))
     :debug-texts []
    }))

(defn serve-card-to-column [state column-index & [open?]]
  (let [card (peek (:stack state))
        card (if (and open? card)
               (assoc card :open true)
               card)]
    (if card
      (-> state
          (update-in [:stack] pop)
          (update-in [:columns column-index :cards] conj card))
      ;; do nothing if stack is empty
      state)))

(defn serve-cards-to-column [state column-index n]
  (reduce
    (fn [memo val]
      (serve-card-to-column memo column-index (if (= (- n 1) val) true false)))
    state
    (range n)))

(defn serve-cards [state]
  (reduce
    (fn [state [idx n]]
      (serve-cards-to-column state idx n))
    state
    (map-indexed vector [1 2 3 4 5 4 3 2 1])))

;; set up initial state of the game
(swap! app-state serve-cards)

;; : : :   2.   G A M E   L O O P   : : : : : : : : :

(defn serve-new-cards [state]
  "When there are no more moves, append a new open card to each column."
  (reduce
    (fn [memo i]
      (serve-card-to-column memo i true))
    state
    (range columns#)))


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
       (display-value card)
       " ("
       (:deck card)
       ")"))

(defn unmark-card [card]
  "Removes marking from a card."
  (dissoc card :moving))

(defn children-of [column card]
  "Returns a vector of all the cards below a certain card in a column."
  (vec (rest (drop-while
               (fn [el] (not= el card))
               column))))

;; [cards, not column] usually fed with the result of children-of
(defn with-alternating-colours? [cards]
  "Takes a vector of cards (not a column b/c it's usually fed with the result of children-of) and check whether they have alternating colours."
  (let [colours (map card-colour cards)]
    ;; JFYI: the `reduce` can return `false` if the last element of
    ;; `cards` is `false`, but this function expects to be handed cards anyway.
    ;; works when `cards` contains only one card
    (boolean (reduce
               (fn [memo colour] (if-not (= memo colour) colour (reduced false))) ;; `reduced` breaks the iteration
               (first colours)
               (rest colours))))) ;; reduce returns false or the last card's colour

(defn sorted-from-card? [column card]
  "Takes a column and a card and checks whether the card and its children are sorted (i.e. with alternating colours and descending values)."
  (let [children (children-of column card)]
    (if (empty? children)
      (= card (last column)) ;; card is either the last card in the column (true), or not in the column at all (false)
      (let [cards (cons card children)]
        (and (= cards (reverse (sort-by #(:value %) cards)))
             (with-alternating-colours? cards))))))

(defn moveable? [column card]
  "Takes a column and a card and checks whether the card can be moved elsewhere."
  (and (open? card)
       (sorted-from-card? (:cards column) card)))

(defn free-pile-for [piles card]
  (first
    (->> piles
         (filter
           (fn [pile]
             (and
               (= (:suit pile) (:suit card))
               (= (count (:cards pile)) (dec (:value card)))))))))


;; : : : DISCARD CARDS : : : : : : : : :

(defn column-for [columns card]
  "Takes a card an a vector of columns and returns the column that contains the card."
  (first
    (->> columns
         (filter
           (fn [column] (some #{card} (:cards column)))))))

(defn discardable? [app card]
  ;; TODO: implement real check
  (and (moveable? (column-for (:columns app) card) card)
       (free-pile-for (:piles app) card)))

;; only a column's last card is discardable
;; idea for improvement: clicking on the highest sorted card on
;; a pile discards all sorted cards below it automatically as well.
(defn discard-card [app card]
  (let [column (column-for (:columns app) card)]
    (if (discardable? app card)
      (-> app
        (update-in [:columns (:index column) :cards]
                   pop)
        (update-in [:piles (:index (free-pile-for (:piles app) card)) :cards]
                   conj (unmark-card card))
        ;; open new last card of column
        (update-in [:columns (:index column) :cards]
                  (fn [cards]
                    (when (seq cards)
                      (assoc-in cards [(dec (count cards)) :open] true)))))
      app ;; do nothing if card cannot be discarded
    )))

(defn index-for-card-in-column [column card]
  (first (keep-indexed (fn [idx el] (when (= el card) idx)) (:cards column))))

(defn mark-for-moving [app card]
  (let [column (column-for (:columns app) card)]
    (-> app
      (assoc-in [:columns (:index column) :cards (index-for-card-in-column column card) :moving] true))))

;; card has already been dereferenced - otherwise we get "Cannot manipulate cursor outside of render phase", only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed"" errors.
(defn handle-card-click [_event channel card]
  (if (open? card)
    (put! channel [mark-for-moving card])))



(defn all-cards [app]
  (reduce
    (fn [memo el]
      (apply conj memo (:cards el)))
    []
    (:columns app)))

(defn cards-marked-for-moving [app]
  (filter
    :moving
    (all-cards app)))

(defn unmark-all-column-cards [app]
  (let [cards-to-unmark (cards-marked-for-moving app)
        columns (:columns app)]
    (reduce
      (fn [memo card]
        (let [column (column-for columns card)]
          (update-in memo
                     [:columns (:index column) :cards (index-for-card-in-column column card)]
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
        cards-to-move (cards-marked-for-moving app)]
    (reduce
      (fn [memo card]
        (let [old-column (column-for columns card)]
          (-> memo
            (update-in [:columns (:index old-column) :cards]
                       pop)
            (update-in [:columns (:index old-column) :cards]
                       #(when (seq %)
                          (assoc-in % [(dec (count %)) :open] true)))
            (update-in [:columns (:index new-column) :cards]
                       conj card))))
      app
      cards-to-move)))

(defn process-single-click [app clicked-card]
  (let [column (column-for (:columns app) clicked-card)]
    (cond
      ;; double click
      (some #{clicked-card} (cards-marked-for-moving app))
        (discard-card app clicked-card)
      ;; single click
      :else
        (cond
          ;; there are cards marked for moving -> try to move cards below `card`.
          (seq (cards-marked-for-moving app))
            (do
              (js/console.log "Try to move some cards here")
              (if (can-be-appended-to? (first (cards-marked-for-moving app)) column)
                (do
                  (js/console.log "Looks safe, moving!")
                  (-> app
                    (move-marked-cards-to (column-for (:columns app) clicked-card))
                    (unmark-all-column-cards)))
                (do
                  (js/console.log "Sorry, cannot move that there, honey!")
                  (-> app
                      (unmark-all-column-cards)
                      (mark-for-moving clicked-card)))))
          ;; there are no cards marked for moving yet -> mark this one.
          :else
            (do
              (js/console.log "no cards marked for moving")
              (mark-for-moving app clicked-card))))))

(defn card-view [card owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (dom/li #js {:className (str "m-card" (when (open? card) " as-open") (when (:moving card) " as-moving"))
                   :onClick (fn [event]
                     (.preventDefault event)
                     (when (open? @card)
                       (put! channel [process-single-click @card])))
                   :onTouchEnd (fn [event]
                     (.preventDefault event)
                     (when (open? @card)
                       (put! channel [process-single-click @card])))
                   :ref "card"}
        (dom/span #js {:className (card-colour card)}
          (label-for card))))))

(defn column-view [column owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (dom/div #js {:className "m-column-wrapper"} ;; .m-column on the div and not the <ul> so empty columns don't disappear
        (apply dom/ul #js {:className "m-column"}
          (om/build-all card-view (:cards column) {:init-state {:channel channel}}))))))

(defn columns-view [columns owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (dom/div #js {:className "m-columns-wrapper"}
        (apply dom/ul #js {:className "m-columns cf"}
        (om/build-all column-view columns {:init-state {:channel channel}}))))))

(defn navigation-view [app owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "l-navigation-container"}
        (dom/ul #js {:className "m-navigation cf"}
          (dom/li #js {:className "m-navigation--item"}
            (dom/h1 #js {:className "m-navigation--title"}
              "Omingard"))
          (dom/li #js {:className "m-navigation--item"}
            (dom/button #js {:className "m-navigation--hit-me"
                             :onClick (fn [_] (om/transact! app serve-new-cards))} "Hit me!")))))))

(defn pile-view [pile owner]
  (reify
    om/IRender
    (render [this]
      (dom/li #js {:className "m-pile"}
        (let [cards (:cards pile)]
          (if (seq cards)
            (apply dom/ul #js {:className "m-pile--cards"}
              (om/build-all card-view cards))
            ;; pile has no cards
            (let [suit (:suit pile)]
              (dom/span #js {:className (str "m-pile--placeholder " (colour suit))}
                (symbol-for-suit suit)))))))))

(defn piles-view [piles owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "l-piles-container"}
        (dom/h3 nil "Piles")
        (apply dom/ul #js {:className "m-piles cf"}
          (om/build-all pile-view piles))))))

(defn omingard-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:channel (chan)})
    om/IWillMount
    (will-mount [_]
       (let [channel (om/get-state owner :channel)]
         (go (loop []
           (let [[func & attrs] (<! channel)]
             (om/transact! app (fn [xs] (apply func xs attrs))))
           (recur)))))
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (dom/div #js {:className "omingard-wrapper"}
        (om/build navigation-view app)
        (dom/div #js {:className "l-game-container"}
          (om/build columns-view (:columns app) {:init-state {:channel channel}})
          (dom/div #js {:className "l-debug"}
            (dom/h3 nil "Debug (newest click events first)")
            (apply dom/ul #js {:className "m-debug-texts"}
              (map-indexed
                (fn [idx el]
                  (dom/li #js {:className "m-debug-texts--item"}
                    (str (- (count (:debug-texts app)) idx) ". " el)))
                (:debug-texts app))))
          (om/build piles-view (:piles app)))
      ))))

(om/root
  omingard-view
  app-state
  {:target (. js/document (getElementById "omingard"))})
