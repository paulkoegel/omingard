(ns omingard-css.core
  (:require [garden.def :refer [defstylesheet defstyles]]
            [garden.units :refer [px]]
            [garden.stylesheet :refer [at-media]]
            [garden.units :as u :refer [px pt rem px+ px* px- px-div]])
  (:refer-clojure :exclude [rem])) ;; `rem` is Clojure core's remainder function

(def content-width (rem 100))
(def card-width (rem 10))

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
    :font-family "VT323, sans-serif"
    :font-size (rem 1.6)}]

  [:h1 {
    :font-weight "normal"
        }]

  [:.omingard-wrapper {
    :outline "0"
   }]

  [:.black
    {:color "black"}]
  [:.red
    {:color "#666"}]

  [:.l-navigation-container {
    :width "100%"
    :padding "0.8rem 1rem 0.8rem"
    :background "black"
    :height "4.5rem"}]

  [:.m-navigation {
    :list-style "none"
    :padding "0"
    :color "#fff"
    :width content-width
    :margin "0 auto"}]

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
    :background "#000"
    :border "1px solid #fff"
    }]

  [:.m-navigation--hit-me {
    :background "#000"
    :border "1px solid #fff"}]

  [:.l-game-container
    {:width content-width
     :margin "0 auto"
     :-webkit-touch-callout "none"
     :-webkit-user-select "none"
     :-khtml-user-select "none"
     :-moz-user-select "none"
     :-ms-user-select "none"
     :user-select "none" ;; disable text selection on cards
     }]

  [:.m-columns-wrapper {
    :margin "2rem auto 0"}]

  [:.m-columns {
    :margin 0
    :padding 0}]

  [:.m-column-wrapper {
    :float "left"
    :width card-width
    :margin-right (rem 1)}]

   [:.m-column {
     :list-style "none"
     :padding 0}]

   [:.m-column--placeholder {
     :height (px 25)
     :border "1px dashed #000"
     :margin "2px auto"
     :color "#000"
     :font-size (px 13)
     :text-align "center"
     :line-height (rem 2)}]

   [:.m-card
     {:background "#fff"
      :line-height (rem 1)
      :margin "2px 0"
      :padding "5px"
      :text-align "center"
      :height (px 25)
      :border "1px solid #000"
     }
       [:&.as-open
          {:cursor "pointer"
           }]
       [:&.as-moving
         {:background-color "#666"}]
       [:&.is-moveable
         {:border "1px solid #666"}]
       [:&.as-closed
         {:background-color "#000"}]]

  [:.m-card_small
    {:background "#fff"
     :padding "0 3px"
     :border "1px solid #000"
     }]

  [:.l-piles-container
    {:position "fixed"
     :bottom 0
     :width content-width}]

  [:.l-piles-container--headline
    {:float "left"
     :margin "0"}]

  [:.l-piles-container--note
    {:font-size (rem 1.2)
     :font-weight "normal"
     :margin-left (rem 1)
     :color "#666"}]

  [:.m-piles
    {:padding (px 0)
     :list-style-type "none"
     :float "left"}]

  [:.m-pile {
    :float "left"
    :margin-right (rem 1)
    :width card-width}]

  [:.m-pile--placeholder
    {:background "#fff"
      :line-height (rem 1)
      :margin "2px 0"
      :padding "5px"
      :text-align "center"
      :height (px 25)
      :border "1px solid #000"}
    [:&.red {
      :color "#666"}]
    [:&.black {
      :color "#000"}]]

  [:.l-piles-container--new-cards
    {:float "left"
     :color "#000"
     :padding "11px 30px"
     :background "#fff"
     :border "1px solid #000"}]

  [:.l-howto
    (let [width 600
          height 280]
      {:display "none"
       :background "#000"
       :color "#fff"
       :position "fixed"
       :left "50%"
       :top "50%"
       :height (px height)
       :width (px width)
       :margin (str (- (/ height 2)) "px 0 0 " (- (/ width 2)) "px")
       :padding (px 20)
       })
    [:&.is-visible
      {:display "block"}]
   ]
)
