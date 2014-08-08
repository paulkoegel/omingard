(defproject omingard "0.1.0-SNAPSHOT"
  :description "Better Solitaire 'Irmingard' written in Om"
  :url "https://github.com/paulwittmann/omingard"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.5.0"]
                 [garden "1.1.5" :exclusions [org.clojure/clojure]]]

  :plugins [[lein-cljsbuild "1.0.2"]
            [lein-garden "0.1.9" :exclusions [org.clojure/clojure]]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "omingard"
              :source-paths ["src"]
              :compiler {
                :output-to "omingard.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]}

  :garden {:builds [{;; Optional name of the build:
                     :id "application"
                     ;; The var containing your stylesheet:
                     :stylesheet omingard-css.core/application
                     ;; Compiler flags passed to `garden.core/css`:
                     :compiler {;; Where to save the file:
                                :output-to "resources/application.css"
                                ;; Compress the output?
                                :pretty-print? false}}]})
