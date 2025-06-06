fun foldl (f, acc, []) = acc
  | foldl (f, acc, x::xs) = foldl (f, f(acc, x), xs)
fun reverse xs = foldl (fn (acc, x) => x::acc, [], xs)
fun foldr (f, acc, xs) = foldl (fn (x, acc) => f(acc, x), acc, reverse xs)
fun append (xs, ys) = foldr (op::, ys, xs)
fun concat xss = foldr (append, [], xss)
fun filter (f, xs) = foldr (fn (x, xs) => if f x then x::xs else xs, [], xs)
fun map (f, xs) = foldr (fn (x, xs) => (f x)::xs, [], xs)
fun length xs = foldl (fn (acc, _) => acc + 1, 0, xs)