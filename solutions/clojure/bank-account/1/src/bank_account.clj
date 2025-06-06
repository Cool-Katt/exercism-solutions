(ns bank-account)

(def open-account   #(atom 0))
(def close-account  #(reset! % nil))
(def get-balance    deref)
(def update-balance #(swap! % + %2))