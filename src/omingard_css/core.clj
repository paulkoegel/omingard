(ns omingard-css.core
  (:require [garden.def :refer [defstylesheet defstyles]]
            [garden.units :refer [px]]))

(defstylesheet application
  {:output-to "resources/public/application.css"}
  [:body
   {:font-family "sans-serif"
    :font-size (px 16)
    :line-height 1.5}])
