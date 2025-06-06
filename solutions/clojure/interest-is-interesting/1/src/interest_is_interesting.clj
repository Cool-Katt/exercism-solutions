(ns interest-is-interesting)

(defn interest-rate
  "Returns the interest rate based on the specified balance."
  [balance]
  (cond
    (neg? balance) -3.213
    (< balance 1000.0M) 0.5
    (< balance 5000.0M) 1.621
    :else 2.475)
  )

(defn annual-balance-update
  "Returns the annual balance update, taking into account the interest rate."
  [balance]
  (+(* (bigdec (interest-rate balance)) 0.01M (abs balance)) balance)
  )

(defn amount-to-donate
  "Returns how much money to donate based on the balance and the tax-free percentage."
  [balance tax-free-percentage]
  (if (pos? balance) (int (* tax-free-percentage 0.01 balance 2)) 0)
  )

(defn abs [n] (if (neg? n) (- n) n))