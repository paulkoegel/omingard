(ns omingard-css.core
  (:require [garden.def :refer [defstylesheet defstyles]]
            [garden.units :refer [px]]
            [garden.stylesheet :refer [at-media]]
            [garden.units :as u :refer [px pt rem px+ px* px- px-div]])
  (:refer-clojure :exclude [rem])) ;; `rem` is Clojure core's remainder function

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

  [:.l-navigation-container {
    :width "100%"
    :padding "0.8rem 1rem 0.8rem"
    :background "black"
    :height "4.5rem"}]

  [:.m-navigation {
    :list-style "none"
    :padding "0"
    :color "#eee"
    :width (rem 100)
    :margin "0 auto"}]

  [:.m-navigation--item {
    :float "left"
    :margin-right (rem 2)}
    [:&.as-right {
      :float "right"}]]

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
    {:width "100rem"
     :margin "0 auto"
     :-webkit-touch-callout "none"
     :-webkit-user-select "none"
     :-khtml-user-select "none"
     :-moz-user-select "none"
     :-ms-user-select "none"
     :user-select "none" ;; disable text selection on cards */
     }]

  [:.m-columns-wrapper {
    :margin "2rem auto 0"}]

  [:.m-columns {
    :margin 0
    :padding 0}]

  [:.m-column-wrapper {
    :float "left"
    :width (rem 10)
    :margin-right (rem 1)
    :min-height (px 1)
    :border-top "1px solid black"}]

   [:.m-column {
     :list-style "none"
     :padding 0}]

   [:.m-column--placeholder {
     :height (px 21)
     :border-radius "3px"
     :border "1px dashed #ddd"
     :margin "2px auto"
     :background-color "#fafafa"}]

   [:.m-card
     {:background "#ddd"
      :line-height (rem 1)
      :margin "2px 0"
      :padding "5px"
      :text-align "center"
      :border-radius "3px"
      :cursor "pointer"
     }
       [:.black
         {:color "black"}]
       [:.red
         {:color "red"}]
       [:&.as-open
         {:background-color "#fafafa"
          :cursor "pointer"}]
       [:&.as-moving
         {:background-color "yellow"}]]

  [:.l-piles-container {
    :background "#ccc"}]

  [:.m-piles {
    :list-style-type "none"}]

  [:.m-pile {
    :float "left"}]

  [:.m-pile--placeholder
    {}
    [:&.red {
      :color "red"}]
    [:&.black {
      :color "black"}]]

  [:.l-debug
    {:background "#C1D1F7"}]
)
