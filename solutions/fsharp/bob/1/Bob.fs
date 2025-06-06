module Bob

open System

let response (input: string): string =

    let input = input.TrimEnd()

    let isShout = String.exists Char.IsLetter input && input.ToUpper() = input

    match (input = "", input.EndsWith("?"), isShout) with

    | (_, true, true) -> "Calm down, I know what I'm doing!"
    | (_, _, true) -> "Whoa, chill out!"
    | (_, true, _) -> "Sure."
    | (true, _, _) -> "Fine. Be that way!"
    | _ -> "Whatever."