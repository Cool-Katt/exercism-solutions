(ns sublist)

(defn classify [list1 list2] ;; <- arglist goes here
  (cond (= (compare list1 list2) 0) :equal
        (some #{list1} (partition (count list1) 1 list2)) :sublist
        (some #{list2} (partition (count list2) 1 list1)) :superlist
        :else :unequal
  )
)
