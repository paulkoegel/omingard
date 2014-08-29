(defproject omingard "0.1.0-SNAPSHOT"
  :description "Better Solitaire 'Irmingard' written in Om"
  :url "https://github.com/paulwittmann/omingard"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [org.clojure/core.async "0.1.338.0-5c5012-alpha"]
                 [om "0.7.1"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-garden "0.1.9" :exclusions [org.clojure/clojure]]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [
             {:id "omingard"
              :source-paths ["src/omingard"] ;; not "src" b/c we don't want to build the stuff inside omingard_css.
              :compiler {
                :output-to "omingard.js"
                :output-dir "out"
                :optimizations :none
                :source-map "omingard.js.map"
                :pretty-print true}}
             {:id "production"
              :source-paths ["src/omingard/"]
              :compiler {
                :output-to "resources/public/omingard.js"
                :output-dir "resources/public/out/"
                :optimizations :advanced
                :pretty-print false
                :preamble ["react/react.min.js"]
                :externs  ["react/externs/react.js"]}}
             {:id "test"
               :source-paths ["src/omingard" "src/omingardtest"]
               :compiler {
                 :output-to "test.js"
                 :output-dir "testout"
                 :optimizations :none}}
             ]}
                ;;:source-map true}}]}

  :garden {:builds [{;; Optional name of the build:
                     :id "application"
                     ;; The var containing your stylesheet:
                     :stylesheet omingard-css.core/application
                     ;; Compiler flags passed to `garden.core/css`:
                     :compiler {;; Where to save the file:
                                :output-to "resources/application.css"
                                ;; Compress the output?
                                :pretty-print? false}}]}
)
