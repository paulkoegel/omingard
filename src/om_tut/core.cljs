(ns om-tut.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.data :as data]
            [clojure.string :as string]))

(enable-console-print!)

;; generate a stack of cards

(def suits
  (flatten
    (map
      (fn [suit] [suit, suit])
      ["hearts", "diamonds", "spades", " clubs"])))

(defn card-map [suit]
  (map
    (fn [value]
      {:suit suit :value value})
    (range 1 12)))

(defn suit-map [suits] (map card-map suits))

(suit-map suits)

(defn shuffled-stack []
  (shuffle (into [] (flatten (suit-map suits)))))

(shuffled-stack)

;; mockup with map
(def my-map {:stack (shuffled-stack),
            :columns (map (fn [_] []) (range 1 10))})


(pop [1,2,3])

(pop (:stack my-map))

(let [card-to-move (last (:stack my-map))]

)

(nth [1 2 3] 1)

(conj [1 2 3] 4)

(defn deploy-card-to-column [a-map column-index]
  (let [card-to-move (last (:stack my-map))]
       [new-stack (pop (:stack my-map))]
       [new-columns (map-indexed (fn [i column] (if ) ) (:columns my-map))]

)
  (pop (:stack a-map))
  )

(defn deploy-cards [a-map]
  ())



(map (fn [_] {}) (range 1 10))

(def app-state
  (atom
    {:stack (shuffled-stack)
     :piles (mapv (fn [_] []) (range 1 9))
     :columns (mapv (fn [_] []) (range 1 10))
    }))

(@app-state :stack)

app-state

(defn serve-card-to-column [state column]
  (let [card (peek (:stack state))]
    (-> state
        (update-in [:stack] pop)
        (update-in [:columns column] conj card)))
)

(swap! app-state serve-card-to-column 1)

(count (:stack @app-state))

(defn deploy-cards []
  (map (fn [] nil) [1, 2, 3, 4, 5, 4, 3, 2, 1]
  ))

(swap! app-state deploy-cards)

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

(om/root registry-view app-state
  {:target (. js/document (getElementById "registry"))})
