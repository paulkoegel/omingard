(ns omingard.components.card
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [omingard.helpers :as helpers]))

(defn handle-card-click [appl clicked-card]
  (let [column (helpers/column-for (:columns appl) clicked-card)]
    (cond
      ;; card's on top of a pile - maybe write a function for this with a better check
      (and (not column) (helpers/open? clicked-card))
        (-> appl
            (helpers/unmark-all-cards)
            (helpers/mark-card-for-moving clicked-card))
      (helpers/moveable? (:cards column) clicked-card)
        (cond
          ;; double click
          (some #{clicked-card} (helpers/cards-marked-for-moving appl))
            (helpers/discard-card appl clicked-card)
          ;; single click
          :else
            (cond
              ;; there are cards marked for moving -> try to move cards below `card`.
              (seq (helpers/cards-marked-for-moving appl))
                (cond
                  (helpers/can-be-appended-to? (first (helpers/cards-marked-for-moving appl)) column)
                    (-> appl
                      (helpers/move-marked-cards-to (helpers/column-for (:columns appl) clicked-card))
                      (helpers/unmark-all-cards))
                  :else
                    (-> appl
                      (helpers/unmark-all-cards)
                      (helpers/mark-card-and-children-for-moving clicked-card)))
              ;; there are no cards marked for moving yet -> mark this one.
              :else
                (helpers/mark-card-and-children-for-moving appl clicked-card)))
      :else
        appl)))

;; TODO: it's a bit stupid we have to return appl at the end but need to do it since this is executed via om/transact!
(defn handle-card-hover [appl hovered-card target]
  (when (helpers/moveable? (:cards (helpers/column-for (:columns appl) hovered-card)) hovered-card)
    (.add (.-classList target) "is-moveable"))
  appl)

(defn handle-card-unhover [appl hovered-card target]
  (.remove (.-classList target) "is-moveable")
  appl)

(defn item [card owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (cond
        (helpers/open? card)
          (dom/li #js {:className (str "m-card as-open" (when (:moving card) " as-moving"))
                       :onClick (fn [event]
                         (.preventDefault event)
                         (put! channel [handle-card-click @card]))
                       :onTouchStart (fn [event]
                         (.preventDefault event)
                         (put! channel [handle-card-click @card]))
                       :onMouseOver (fn [event]
                         (if-not (helpers/is-touch-device?)
                           (put! channel [handle-card-hover @card (.-currentTarget event)])))
                       :onMouseLeave (fn [event]
                         (if-not (helpers/is-touch-device?)
                           (put! channel [handle-card-unhover @card (.-currentTarget event)])))
                       :ref "card"}
            (dom/span #js {:className (helpers/card-colour card)}
              (helpers/label-for card)))
        :else
          (dom/li #js {:className (str "m-card as-closed")})))))
