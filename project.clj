(defproject omingard "0.1.0-SNAPSHOT"
  :description "Better Solitaire 'Irmingard' written in Om"
  :url "https://github.com/paulwittmann/omingard"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.5.0"]]

  :plugins [[lein-cljsbuild "1.0.2"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "om-tut"
              :source-paths ["src"]
              :compiler {
                :output-to "om_tut.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
