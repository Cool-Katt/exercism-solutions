(ns collatz-conjecture)

(defn collatz [num] ;; <- arglist goes here
  (loop [num num total 0]
    (cond
      (< num 1)   (throw "ERROR")
      (= num 1)   total
      (even? num) (recur (/ num 2) (inc total))
      :else       (recur (+ (* 3 num) 1) (inc total))
    )
  )
)
