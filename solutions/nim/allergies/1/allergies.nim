type
  Allergents* = enum
    Eggs, Peanuts, Shellfish, Strawberries, Tomatoes, Chocolate, Pollen, Cats
proc isAllergicTo*(score: int,allergy: Allergents):bool =
  return (score and (1 shl int(allergy))) != 0
proc allergies*(score: int): set[Allergents] =
  for i in ord(low(Allergents))..ord(high(Allergents)):
    if isAllergicTo(score, Allergents(i)):
      result = result + {Allergents(i)}
