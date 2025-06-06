module Yacht

type Category = 
    | Ones
    | Twos
    | Threes
    | Fours
    | Fives
    | Sixes
    | FullHouse
    | FourOfAKind
    | LittleStraight
    | BigStraight
    | Choice
    | Yacht

type Die =
    | One = 1
    | Two = 2
    | Three = 3
    | Four = 4
    | Five = 5
    | Six = 6

let score category dice =
    let counts = List.countBy id dice
    let count d = counts |> List.tryFind (fun (x, _) -> x = d) |> Option.defaultValue (d, 0) |> snd |> (*) (int d)
    let ds = List.distinct dice
    let sumOfDice = dice |> List.sumBy int
    
    match category with
    | Yacht -> if List.length ds = 1 then 50 else 0
    | Ones -> count Die.One
    | Twos -> count Die.Two
    | Threes -> count Die.Three
    | Fours -> count Die.Four
    | Fives -> count Die.Five
    | Sixes -> count Die.Six
    | Choice -> dice |> List.sumBy int
    | FullHouse ->
        if List.length counts <> 2 then 0
        elif List.exists (fun (_, c) -> c = 1) counts then 0
        else List.sumBy (fun (d, c) -> int(d) * c) counts
    | FourOfAKind ->
        counts |> List.tryFind (fun (_, c) -> c >= 4) |> Option.map (fun (d, _) -> int(d) * 4) |> Option.defaultValue 0
    | LittleStraight ->
        if sumOfDice = 15 then 30 else 0
    | BigStraight ->
        if sumOfDice = 20 then 30 else 0