(ns omingard.views.card-view
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [omingard.helpers :as helpers]))

(defn main [card owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [channel]}]
      #_(dom/li nil "a")
      (dom/li #js {:className (str "m-card" (when (helpers/open? card) " as-open") (when (:moving card) " as-moving"))
                   :onClick (fn [event]
                     (.preventDefault event)
                     (put! channel [helpers/handle-click @card]))
                   :onTouchEnd (fn [event]
                     (.preventDefault event)
                     (put! channel [helpers/handle-click @card]))
                   :ref "card"}
        (dom/span #js {:className (helpers/card-colour card)}
          (helpers/label-for card))))))
