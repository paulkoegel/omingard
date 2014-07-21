(ns om-tut.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.data :as data]
            [clojure.string :as string]))

(enable-console-print!)

;; GLOBAL CONSTANTS
(def columns# 9)

(defn colour [{suit :suit} card]
  (if (contains? [:heart :diamonds] suit)
    :red
    :black))


;; generate a stack of cards
(def suits (mapcat (fn [suit] [suit, suit]) [:hearts :diamonds :spades :clubs]))

(defn card-map [suit]
  (map
    (fn [value]
      {:suit suit :value value})
    (range 1 12)))

(defn suit-map [suits] (map card-map suits))

(defn shuffled-stack []
  (shuffle (vec (flatten (suit-map suits)))))

;; initialise app state
(def app-state
  (atom
    {:stack (shuffled-stack)
     :piles (mapv (fn [suit] {suit []}) suits)
     :columns (mapv (fn [_] []) (range columns#))
    }))

(defn serve-card-to-column [state column & [open?]]
  (let [card (peek (:stack state))
        card (if (and open? card)
              (assoc card :open true)
              card)]
    (if card
      (-> state
          (update-in [:stack] pop)
          (update-in [:columns column] conj card))
      ;; do nothing if stack is empty
      state)))

(defn serve-cards-to-column [state column n]
  (reduce
    (fn [state val]
      (serve-card-to-column state column (if (= (- n 1) val) true false)))
    state
    (range n)))

;; demos:
;; (serve-cards-to-column @app-state 1 5)
;; (map-indexed vector [1, 2, 3, 4, 5, 4, 3, 2, 1])
;; (map vector (range) [1, 2, 3, 4, 5, 4, 3, 2, 1])

(defn serve-cards [state]
  (reduce
    (fn [state [idx n]]
      (serve-cards-to-column state idx n))
    state
    (map-indexed vector [1, 2, 3, 4, 5, 4, 3, 2, 1])))

;;(serve-cards @app-state) ;; non-destructive

;; set up initial state of the game
(swap! app-state serve-cards)

;; when there are no more moves, serve new cards to columns
(defn serve-new-cards [state]
  (reduce
    (fn [state i]
      (serve-card-to-column state i true))
    state
    (range columns#)))

(serve-new-cards @app-state)

(swap! app-state serve-new-cards)


;; DISCARD CARDS - - - - - - - - - -

#_(defn discardable? [{piles :piles} state
                    card]
  (let [target-pile (pile-index-for-discarding piles card)]
    (and (:open card) target-pile)))

;; (pile-index-for-discarding ((:piles @app-state) {:suit :hearts :value 1}))

;;(.indexOf (apply array [1 2 3]) 2)


#_(defn pile-index-for-discarding [piles card]
  (let [cards-suit (:suit card)
        cards-value (:value card)
        target-pile (first (filter #(and (= cards-suit (:suit %)) (= cards-value (:value %))) piles))]
    (.indexOf (apply array piles) target-pile)))
  ;;(->> piles
  ;;    (filter
  ;;       (fn)
  ;;      )))

;; only a column's last card is discardable
;; idea for improvement: clicking on the highest sorted card on
;; a pile discards all sorted cards below it automatically as well.
#_(defn discard-card [state column-index]
  (let [card (-> state :columns (nth column-index) last)
        target-pile (pile-for-card state card)]
    (if (discardable? card)
      (-> state
          (update-in [:columns column-index] pop))
          (update-in [:piles] )
      ;; do nothing if the card cannot be discarded
      state)))

#_(discard-card @app-state 0)

;; convenience functions for debugging

(defn d-column-ending-cards [{columns :columns} state]
  (map
   (fn [column]
     (let [card (last column)]
       (str (subs (:suit card) 0 1) (:value card))))
   columns)
)
;; demo:
(d-column-ending-cards @app-state)


;; OM TUTORIAL LEFTOVERS = = = / / - - \ \ _ _ / / - - \ \ ^ ^ 0 0 p p b b ! !


(defn middle-name [{:keys [middle middle-initial]}]
  (cond
    middle (str " " middle)
    middle-initial (str " " middle-initial ".")))

(defn display-name [{:keys [first last] :as contact}]
  (str last ", " first (middle-name contact)))

(defn student-view [student owner]
  (reify
    om/IRender
    (render [_]
      (dom/li nil (display-name student)))))

(defn professor-view [professor owner]
  (reify
    om/IRender
    (render [_]
      (dom/li nil
        (dom/div nil (display-name professor))
        (dom/label nil "Classes")
        (apply dom/ul nil
          (map #(dom/li nil %) (:classes professor)))))))

(defmulti entry-view (fn [person _] (:type person)))

(defmethod entry-view :student
  [person owner] (student-view person owner))

(defmethod entry-view :professor
  [person owner] (professor-view person owner))

;; add details of a professor's classes (from app) to all professor maps - not permanently, of course.
(defn people [app]
  (->> (:people app)
    (mapv (fn [x]
      (if (:classes x)
        (update-in x [:classes]
          (fn [cs] (mapv (:classes app) cs)))
         x)))))

(defn registry-view [app owner]
  (reify
    om/IRenderState
    (render-state [_ state]
      (dom/div #js {:id "registry"}
        (dom/h2 nil "Registry")
        (apply dom/ul nil
          (om/build-all entry-view (people app)))))))

(defn parse-contact [contact-str]
  (let [[first middle last :as parts] (string/split contact-str #"\s+")
        [first last middle] (if (nil? last) [first middle] [first last middle])
        middle (when middle (string/replace middle "." ""))
        c (if middle (count middle) 0)]
    (when (>= (count parts) 2)
      (cond-> {:first first :last last}
        (== c 1) (assoc :middle-initial middle)
        (>= c 2) (assoc :middle middle)))))

;; (parse-contact "Gerald J. Sussman")

(defn sort-by-last-name [app _]
  (om/transact! app :contacts #(vec (sort (fn [{a :last}, {b :last}] #_(js/console.log a b) (< (string/lower-case a) (string/lower-case b))) %))))

(defn add-contact [app owner]
  (let [new-contact (-> (om/get-node owner "new-contact")
                        .-value
                        parse-contact)]
    (when new-contact
      (do
        (om/transact! app :contacts #(conj % new-contact))
        (set! (.-value (om/get-node owner "new-contact")) nil) ; reset the input
        ))))

(defn contact-view [contact owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [delete]}]
      (dom/li nil
        (dom/span nil (display-name contact))
        (dom/button #js {:onClick (fn [e] (put! delete @contact))} "Delete")))))

(defn contacts-view [app owner]
  (reify
    om/IInitState
      (init-state [_]
        {:delete (chan)})
    om/IWillMount
      (will-mount [_]
        (let [delete (om/get-state owner :delete)]
          (go (loop []
            (let [contact (<! delete)]
              (om/transact! app :contacts
                (fn [xs] (vec (remove #(= contact %) xs))))
              (recur))))))
    om/IRenderState
    (render-state [this {:keys [delete]}]
      (dom/div nil
        (dom/h2 nil "Contact list")
        (dom/button #js {:onClick #(sort-by-last-name app owner)}
          "Sort by last name")
        (apply dom/ul nil
          (om/build-all contact-view (:contacts app)
            {:init-state {:delete delete}}))
        (dom/div nil
          (dom/input #js {:type "text" :ref "new-contact"})
          (dom/button #js {:onClick #(add-contact app owner)} "Add contact"))))))

#_(defn omingard-view [app owner]
  (reify
    om/IRenderState
    (render-state [this])
  ))


(om/root
  (fn [app owner]
    (apply dom/div #js {:className "columns-container"}
      (map
        (fn [column]
          (apply dom/ul #js {:className "m-column"}
            (map
              (fn [card]
                (dom/li #js {:className "m-card"}
                  (str (:suit card) " " (:value card))))
              column)))

          ;; )
          ;;(fn [column]
          ;;(apply dom/ul #js {:className "m-column"}
          ;; (map (fn [card] (dom/li nil (str (:suit card) " " (:value card)))) column)))
          (:columns app))))
  app-state
  {:target (. js/document (getElementById "omingard"))})




;; SANDBOX - F Y I = = = = = = = = = =
;; x product of suits and values
(for [suit [:hearts, :diamonds, :spades, :clubs]
      i (range 13)]
     [i suit])

;; alternative:
(mapcat (fn [suit]
          (map (fn [el] [el suit] ) (range 13)))
        [:hearts, :diamonds, :spades, :clubs])

;; / E N D   F Y I ===
