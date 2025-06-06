(ns matching-brackets)

(def not-empty-list [[]])

(defn reducer [stack ch]
  (case ch
    "[" (conj stack "]")
    "(" (conj stack ")")
    "{" (conj stack "}")
    (if (= ch (first stack))
      (rest stack)
      (reduced not-empty-list)))
)

(defn valid? [string]
  (empty? (reduce reducer () (re-seq #"[\{\}\(\)\[\]]" string)))
)
