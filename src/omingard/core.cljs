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
            [clojure.string :as string]
            [omingard.setup :as setup]
            [omingard.appstate :as app]
            [omingard.helpers :as helpers]
            [omingard.components.card :as card-components]
            [omingard.components.pile :as pile-components]))

(enable-console-print!)
(js/React.initializeTouchEvents true)

;; initialize app state
(swap! app/app-state setup/serve-cards)

(add-watch app/app-state :history
  (fn [_ _ _ n]
    (when-not (= (last @app/app-history) n)
      (swap! app/app-history conj n))))

(defn column-placeholder-component [column-index owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (dom/li #js {:className "m-column--placeholder"
                   :onClick (fn [event]
                     (.preventDefault event)
                     (put! channel [helpers/handle-column-placeholder-click column-index]))} "Put a king here."
                  ))))

(defn column-component [column owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (let [column-cards (:cards column)]
        (dom/div #js {:className "m-column-wrapper"} ;; .m-column on the div and not the <ul> so empty columns don't disappear
          (cond
            (seq column-cards)
              (apply dom/ul #js {:className "m-column"}
                (om/build-all card-components/item column-cards {:init-state {:channel channel}}))
            :else
              (dom/ul #js {:className "m-column"}
                (om/build column-placeholder-component {:index (:index column)} {:init-state {:channel channel}}))))))))


(defn columns-component [columns owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (dom/div #js {:className "m-columns-wrapper"}
        (apply dom/ul #js {:className "m-columns cf"}
        (om/build-all column-component columns {:init-state {:channel channel}}))))))

(defn navigation-component [appl owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "l-navigation-container"}
        (dom/ul #js {:className "m-navigation cf"}
          (dom/li #js {:className "m-navigation--item"}
            (dom/h1 #js {:className "m-navigation--title"}
              "Omingard"))
          (dom/li #js {:className "m-navigation--item as-right"}
            (dom/button #js {:className "m-navigation--hit-me"
                             :onClick (fn [_] (om/transact! appl helpers/serve-new-cards))}
                        "Hit me!"))
          (dom/li #js {:className "m-navigation--item as-right"}
            (dom/button #js {:className "m-navigation--undo"
                             :onClick (fn [_] (om/transact! appl helpers/undo))}
                        "↩ Undo"))
          (dom/li #js {:className "m-navigation--item as-right"}
            (dom/a #js {:href "https://github.com/paulwittmann/omingard" :target "_blank"} "Github")))))))

(defn hide-howto-popup [e]
  (.remove (.-classList (.-currentTarget e)) "is-visible"))

(defn omingard-component [appl owner]
  (reify
    om/IInitState
    (init-state [_]
      {:channel (chan)})
    om/IWillMount
    (will-mount [_]
       (let [channel (om/get-state owner :channel)]
         (go (loop []
           (let [[func & attrs] (<! channel)]
             (om/transact! appl (fn [xs] (apply func xs attrs))))
           (recur)))))
    om/IDidMount
    (did-mount [this]
      (.focus (om/get-node owner)))
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (dom/div #js {:className "omingard-wrapper"
                    :tabIndex 0 ;; for focussing
                    :onKeyDown (fn [event]
                      ;; do not `(.preventDefault event)` as that'd disable ctrl+r and other browser keyboard shortcuts
                      (when (= 13 (.-keyCode event))
                            (om/transact! appl helpers/serve-new-cards)))}
        (om/build navigation-component appl)
        (dom/div #js {:className "l-game-container"}
          (om/build columns-component (:columns appl) {:init-state {:channel channel}})
          (dom/div #js {:id "js-howto"
                        :className "l-howto is-visible"
                        :onClick hide-howto-popup
                        :onTouchStart hide-howto-popup}
            (dom/h1 nil "How to play")
            (dom/ol nil
              (dom/li nil
                "Move cards:"(dom/br nil)
                "Red goes below black (and vice versa). Descending values."(dom/br nil)
                "A "(dom/span #js {:className "m-card_small red"} "♥Q")
                " can go below a " (dom/span #js {:className "m-card_small black"} "♠K")
                " or " (dom/span #js {:className "m-card_small black"} "♣K")
                "."(dom/br nil)
                "First click on the queen, then on the king.")
              (dom/li nil
                "Discard aces with a double clicking.")
              (dom/li nil
                "Serve new cards by clicking on \"Hit me\" when there are no more moves.")))
          (om/build pile-components/collection [(:piles appl) (:stack appl)] {:init-state {:channel channel}}))
      ))))

(om/root
  omingard-component
  app/app-state
  {:target (. js/document (getElementById "omingard"))})
