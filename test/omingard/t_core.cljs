(ns omingard.t-core
  (:use midje.sweet)
  (:require [omingard.core :as core]))

 (fact "yo"
  (+ 1 1) => 2)
