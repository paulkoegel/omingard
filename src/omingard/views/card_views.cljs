(ns omingard.views.card-views
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [omingard.helpers :as h]))

(defn handle-card-click [app clicked-card]
  (let [column (h/column-for (:columns app) clicked-card)]
    (cond
      ;; card's on top of a pile - maybe write a function for this with a better check
      (and (not column) (h/open? clicked-card))
        (h/mark-card-for-moving app clicked-card)
      (h/moveable? (:cards column) clicked-card)
        (cond
          ;; double click
          (some #{clicked-card} (h/cards-marked-for-moving app))
            (h/discard-card app clicked-card)
          ;; single click
          :else
            (cond
              ;; there are cards marked for moving -> try to move cards below `card`.
              (seq (h/cards-marked-for-moving app))
                (cond
                  (h/can-be-appended-to? (first (h/cards-marked-for-moving app)) column)
                    (-> app
                      (h/move-marked-cards-to (h/column-for (:columns app) clicked-card))
                      (h/unmark-all-column-cards))
                  :else
                    (-> app
                      (h/unmark-all-column-cards)
                      (h/mark-card-and-children-for-moving clicked-card)))
              ;; there are no cards marked for moving yet -> mark this one.
              :else
                (h/mark-card-and-children-for-moving app clicked-card)))
      :else
        app)))


(defn item-view [card owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (dom/li #js {:className (str "m-card" (when (h/open? card) " as-open") (when (:moving card) " as-moving"))
                   :onClick (fn [event]
                     (.preventDefault event)
                     (put! channel [handle-card-click @card]))
                   :onTouchEnd (fn [event]
                     (.preventDefault event)
                     (put! channel [handle-card-click @card]))
                   :ref "card"}
        (dom/span #js {:className (h/card-colour card)}
          (h/label-for card))))))
