(ns omingard.views.pile-views
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [omingard.helpers :as helpers]
            [omingard.views.card-views :as card-views]))

(defn item-view [pile owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (dom/li #js {:className "m-pile"}
        (let [cards (:cards pile)]
          (if (seq cards)
            (dom/div #js {:className "m-pile--cards"}
              (om/build card-views/item-view (last cards) {:init-state {:channel channel}}))
            ;; pile has no cards
            (let [suit (:suit pile)]
              (dom/div #js {:className (str "m-pile--placeholder " (helpers/colour suit))}
                (helpers/symbol-for-suit suit)))))))))

(defn collection-view [piles owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (dom/div #js {:className "l-piles-container"}
        (dom/div #js {:className "cf"}
          (dom/h3 #js {:className "l-piles-container--headline"}
            "Piles"
            (dom/span #js {:className "l-piles-container--note"} "Start discarding aces here with a double click - then twos, threes, etc.")))
        (dom/div #js {:className "cf"}
          (apply dom/ul #js {:className "m-piles cf"}
            (om/build-all item-view piles {:init-state {:channel channel}}))
          (dom/button #js {:className "l-piles-container--new-cards"
                           :onClick (fn [e] (.preventDefault e)
                                            (put! channel [helpers/serve-new-cards]))}
                      "Hit me!"))))))
