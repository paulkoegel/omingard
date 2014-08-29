(ns omingard.views.card-views
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [omingard.helpers :as h]))

(defn handle-card-click [appl clicked-card]
  (let [column (h/column-for (:columns appl) clicked-card)]
    (cond
      ;; card's on top of a pile - maybe write a function for this with a better check
      (and (not column) (h/open? clicked-card))
        (h/mark-card-for-moving appl clicked-card)
      (h/moveable? (:cards column) clicked-card)
        (cond
          ;; double click
          (some #{clicked-card} (h/cards-marked-for-moving appl))
            (h/discard-card appl clicked-card)
          ;; single click
          :else
            (cond
              ;; there are cards marked for moving -> try to move cards below `card`.
              (seq (h/cards-marked-for-moving appl))
                (cond
                  (h/can-be-appended-to? (first (h/cards-marked-for-moving appl)) column)
                    (-> appl
                      (h/move-marked-cards-to (h/column-for (:columns appl) clicked-card))
                      (h/unmark-all-column-cards))
                  :else
                    (-> appl
                      (h/unmark-all-column-cards)
                      (h/mark-card-and-children-for-moving clicked-card)))
              ;; there are no cards marked for moving yet -> mark this one.
              :else
                (h/mark-card-and-children-for-moving appl clicked-card)))
      :else
        appl)))


(defn item-view [card owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (cond
        (h/open? card)
          (dom/li #js {:className (str "m-card as-open" (when (:moving card) " as-moving"))
                       :onClick (fn [event]
                         (.preventDefault event)
                         (put! channel [handle-card-click @card]))
                       :onTouchEnd (fn [event]
                         (.preventDefault event)
                         (put! channel [handle-card-click @card]))
                       :ref "card"}
            (dom/span #js {:className (h/card-colour card)}
              (h/label-for card)))
        :else
          (dom/li #js {:className (str "m-card as-closed")})))))
