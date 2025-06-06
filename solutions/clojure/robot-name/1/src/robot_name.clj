(ns robot-name)

(def robots (atom []))

(defn robot-name
  "get the robot's name"
  [robot] 
  (get @robots robot)
)

(defn reset-name
  "When called without arguments, create a new robot. Otherwise,
  create a new name for the given robot."
  ([] (reset-name (count @robots)))
  ([robot]
   (let [letters (range (int \A) (int \Z))]
     (loop []
       (let [prospective-name (format "%s%s%03d"
                                      (char (rand-nth letters))
                                      (char (rand-nth letters))
                                      (rand-int 1000))]
         (if (some #(= % prospective-name) @robots)
           (recur)
           (do (swap! robots assoc robot prospective-name)
               robot))))))
)

(defn robot
  "Generate a new robot"
  [] 
  (reset-name)
  )
