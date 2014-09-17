(ns omingard-css.core
  (:require [garden.def :refer [defstylesheet defstyles]]
            [garden.units :refer [px]]
            [garden.stylesheet :refer [at-media]]
            [garden.units :as u :refer [px pt rem px+ px* px- px-div]])
  (:refer-clojure :exclude [rem])) ;; `rem` is Clojure core's remainder function

(def content-width (rem 100))
(def card-width "10%")

(defstylesheet application
  {:output-to "resources/public/application.css"}

  ;; http://nicolasgallagher.com/micro-clearfix-hack/ */
  (comment
    For modern browsers
    1. The space content is one way to avoid an Opera bug when the
       contenteditable attribute is included anywhere else in the document.
       Otherwise it causes space to appear at the top and bottom of elements
       that are clearfixed.
    2. The use of `table` rather than `block` is only necessary if using
       `:before` to contain the top-margins of child elements.)

  [:.cf:before :.cf:after
     {:content (pr-str " ") ;; 1
      :display "table"      ;; 2
     }]

  [:.cf:after {:clear "both"}]

  ;; For IE 6/7 only
  ;; Include this rule to trigger hasLayout and contain floats.
  [:.cf {:*zoom 1}]

  [:* {
    :box-sizing "border-box"}]

  [:html {}
    (map
      (fn [[min-width font-size]]
        (at-media {:min-width min-width}
          [:& {:font-size font-size}]))
      [[   "0px" "30.00%"]
       [ "320px" "40.00%"]
       [ "768px" "50.06%"]
       ["1024px" "58.74%"]
       ["1200px" "62.50%"]
       ["1600px" "83.03%"]])]

  [:body {
    :font-family "'Droid Sans', sans-serif"
    :font-size (rem 1.6)}]

  [:.omingard-wrapper {
    :outline "0"
   }]

  [:.black
    {:color "black"}]
  [:.red
    {:color "red"}]

  [:.l-navigation-container {
    :width "100%"
    :padding "0.8rem 1rem 0.8rem"
    :background "black"
    :height "4.5rem"}]

  [:.m-navigation {
    :list-style "none"
    :padding "0"
    :color "#eee"
    :margin "0 auto"}
    (at-media {:min-width (px 768)}
      [:& {:width content-width}])]

  [:.m-navigation--item
    {:float "left"
     :margin-right (rem 2)}

    [:&.as-right
      {:float "right"}]
    [:a
      {:color "white"
       :text-decoration "none"}]
  ]

  [:.m-navigation--title {
    :font-size "2rem"
    :margin "0"}]

  [:.m-navigation--undo {
    :background "#444"
    :border "1px solid #444"
    :border-radius (px 3)}]

  [:.m-navigation--hit-me {
    :background "#234892"
    :border-radius (px 3)
    :border "1px solid #234892"}]

  [:.l-game-container
    {:width "100%"
     :margin "0 auto"
     :-webkit-touch-callout "none"
     :-webkit-user-select "none"
     :-khtml-user-select "none"
     :-moz-user-select "none"
     :-ms-user-select "none"
     :user-select "none" ;; disable text selection on cards
     }
     (at-media {:min-width (px 768)}
       [:& {:width content-width}])]

  [:.m-columns-wrapper {
    :margin "2rem auto 0"}]

  [:.m-columns {
    :margin 0
    :padding 0}]

  [:.m-column-wrapper {
    :float "left"
    :width card-width
    :margin-right "1%"}]

   [:.m-column {
     :list-style "none"
     :padding 0}]

   [:.m-column--placeholder {
     :height (px 25)
     :border-radius (px 3)
     :border "1px dashed #ddd"
     :margin "2px auto"
     :background-color "#fafafa"
     :color "#999"
     :font-size (px 13)
     :text-align "center"
     :line-height (rem 2)}]

   [:.m-card
     {:background "#ddd"
      :line-height (rem 1)
      :margin "2px 0"
      :padding "5px"
      :text-align "center"
      :border-radius (px 3)
      :height (px 25)
      :border "1px solid #bbb"
     }
       [:&.as-open
         {:background-color "#fafafa"
          :cursor "pointer"}]
       [:&.as-moving
         {:background-color "rgba(255, 255, 0, 0.5)"}]
       [:&.is-moveable
         {:border "1px solid rgba(0, 200, 0, 0.5)"
          :box-shadow "0px 0px 3px rgba(0, 200, 0, 1)"}]
       [:&.as-closed
         {:background-color "#444"
          :background-image "url(card_back.png)"
          :background-position "center 72px"}]]

  [:.m-card_small
    {:background "#fafafa"
     :padding "0 3px"
     :border "1px solid #bbb"
     :border-radius (px 3)}]

  [:.l-piles-container
    {:position "fixed"
     :bottom 0
     :width content-width
     :-webkit-touch-callout "none"
     :-webkit-user-select "none"
     :-khtml-user-select "none"
     :-moz-user-select "none"
     :-ms-user-select "none"
     :user-select "none" ;; disable text selection on cards
    }]

  [:.l-piles-container--headline
    {:float "left"
     :margin "0"}]

  [:.l-piles-container--note
    {:font-size (rem 1.2)
     :font-weight "normal"
     :margin-left (rem 1)
     :color "#555"}]

  [:.m-piles
    {:padding (px 0)
     :list-style-type "none"
     :float "left"}]

  [:.m-pile {
    :float "left"
    :margin-right (rem 1)
    :width card-width}]

  [:.m-pile--placeholder
    {:background "#fafafa"
      :line-height (rem 1)
      :margin "2px 0"
      :padding "5px"
      :text-align "center"
      :border-radius (px 3)
      :height (px 25)
      :border "1px solid #bbb"
      :cursor "pointer"}
    [:&.red {
      :color "rgba(255, 0, 0, 0.5)"}]
    [:&.black {
      :color "rgba(0, 0, 0, 0.5)"}]]

  [:.l-piles-container--new-cards
    {:float "left"
     :color "white"
     :padding (px 10)
     :background "#234892"
     :border-radius (px 3)
     :border "1px solid #234892"}]

  [:.l-howto
    (let [width 600
          height 280]
      {:display "none"
       :background "#ccc"
       :color "#333"
       :position "fixed"
       :left "50%"
       :top "50%"
       :height (px height)
       :width (px width)
       :margin (str (- (/ height 2)) "px 0 0 " (- (/ width 2)) "px")
       :padding (px 20)
       :border-radius (px 3)
       :box-shadow "2px 2px 5px rgba(0, 0, 0, 0.4)"})
    [:&.is-visible
      {:display "block"}]
   ]
)
