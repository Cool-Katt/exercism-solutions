reduce .items[] as { $weight, $value } (
  [ range(.maximumWeight + 1) | 0 ];
    [ ., [ (range($weight) | 0), .[] + $value ][:length] ]
  | transpose
  | map(max)
) | last