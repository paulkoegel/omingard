(defproject omingard "0.1.0-SNAPSHOT"
  :description "Better Solitaire 'Irmingard' written in Om"
  :url "https://github.com/paulwittmann/omingard"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2277"]
                 [org.clojure/core.async "0.1.319.0-6b1aca-alpha"]
                 [om "0.7.1"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-garden "0.1.9" :exclusions [org.clojure/clojure]]
            [com.cemerick/clojurescript.test "0.3.1"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "omingard"
              :source-paths ["src/omingard"] ;; not "src" b/c we don't want to build the stuff inside omingard_css.
              :compiler {
                :output-to "omingard.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}
             {:id "test"
              :source-paths ["src/omingard test"]
              :compiler {
                :output-to "outtest/omingard-test.js"
                :output-dir "outtest"
                :optimizations :simple
                :source-map true}}]
    :test-commands {"unit-tests" ["phantomjs" :runner
                                  ;; "this.literal_js_was_evaluated=true"
                                  "outtest/omingard-test.js"]}}
                                  ;;"test/cemerick/cljs/test/extra_test_command_file.js"]}}

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
