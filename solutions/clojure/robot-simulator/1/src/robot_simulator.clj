(ns robot-simulator)

(defn robot [coordinates bearing] {:coordinates coordinates :bearing bearing})

(def turn-right {:north :east, :east :south, :south :west, :west :north})

(def turn-left (zipmap (vals turn-right) (keys turn-right)))

(def advance
  {:north #(update % :y inc)
   :east  #(update % :x inc)
   :south #(update % :y dec)
   :west  #(update % :x dec)}
)

(defn command [robot command]
  (case command
    \A (update robot :coordinates (advance (:bearing robot)))
    \R (update robot :bearing turn-right)
    \L (update robot :bearing turn-left))
)

(defn simulate [commands robot] (reduce command robot commands))
