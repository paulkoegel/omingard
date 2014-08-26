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
            [omingard.views.card-view :as card-view]))

(enable-console-print!)
(js/React.initializeTouchEvents true)

;; : : : DEBUGGING HELPERS : : : : : : : : :

      ;; transforms "J" etc. back to 11 etc.
      (defn value-from-literal-value [literal-value]
        (let [literal-value (string/lower-case literal-value)]
          (cond
            (= literal-value "a") 1
            (= literal-value "j") 11
            (= literal-value "q") 12
            (= literal-value "k") 13
            :else (js/parseInt literal-value))))

      (defn make-card [card-string]
        "Builds a card map from a string - \"d.12.a\", e.g., creates a queen of diamonds (with deck \"a\")."
        (let [card-components (string/split card-string #"\.")
              suit  (keyword (first card-components))
              value (second card-components)
              option (when (= 3 (count card-components)) (keyword (last card-components)))
              deck   (when (some #{option} [:a :b]) option)
              open   (when (= :o option) true)
              card {:suit
                    (cond (= suit :s) :spades
                          (= suit :c) :clubs
                          (= suit :h) :hearts
                          (= suit :d) :diamonds)
              :value (value-from-literal-value value)
              :deck (or deck :a)}]
          (if open (assoc card :open true) card)))
;; - - END -- DEBUGGING HELPERS : : : : : :

;; : INITIAL APP STATE : : : : : : : :
(swap! app/app-state setup/serve-cards)

(add-watch app/app-state :history
  (fn [_ _ _ n]
    (when-not (= (last @app/app-history) n)
      (swap! app/app-history conj n))))

(defn column-placeholder-view [column-index owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (dom/li #js {:className "m-column--placeholder"
                   :onClick (fn [event]
                     (.preventDefault event)
                     (put! channel [helpers/handle-column-placeholder-click column-index]))}
                  ))))

(defn column-view [column owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (let [column-cards (:cards column)]
        (dom/div #js {:className "m-column-wrapper"} ;; .m-column on the div and not the <ul> so empty columns don't disappear
          (cond
            (seq column-cards)
              (apply dom/ul #js {:className "m-column"}
                (om/build-all card-view/main column-cards {:init-state {:channel channel}}))
            :else
              (dom/ul #js {:className "m-column"}
                (om/build column-placeholder-view {:index (:index column)} {:init-state {:channel channel}}))))))))


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
          (dom/li #js {:className "m-navigation--item as-right"}
            (dom/button #js {:className "m-navigation--hit-me"
                             :onClick (fn [_] (om/transact! app helpers/serve-new-cards))}
                        "Hit me!"))
          (dom/li #js {:className "m-navigation--item as-right"}
            (dom/button #js {:className "m-navigation--undo"
                             :onClick (fn [_] (om/transact! app helpers/undo))}
                        "↶ Undo")))))))

(defn pile-view [pile owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (dom/li #js {:className "m-pile"}
        (let [cards (:cards pile)]
          (if (seq cards)
            (apply dom/ul #js {:className "m-pile--cards"}
              (om/build-all card-view/main cards {:init-state {:channel channel}}))
            ;; pile has no cards
            (let [suit (:suit pile)]
              (dom/span #js {:className (str "m-pile--placeholder " (helpers/colour suit))}
                (helpers/symbol-for-suit suit)))))))))

(defn piles-view [piles owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [channel]}]
      (dom/div #js {:className "l-piles-container"}
        (dom/h3 nil "Piles")
        (apply dom/ul #js {:className "m-piles cf"}
          (om/build-all pile-view piles {:init-state {:channel channel}}))))))

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
                            (om/transact! app helpers/serve-new-cards)))}
        (om/build navigation-view app)
        (dom/div #js {:className "l-game-container"}
          (om/build columns-view (:columns app) {:init-state {:channel channel}})
          (om/build piles-view (:piles app) {:init-state {:channel channel}}))
      ))))

(om/root
  omingard-view
  app/app-state
  {:target (. js/document (getElementById "omingard"))})
