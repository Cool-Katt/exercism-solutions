module Acronym (abbreviate) where
import Data.Char ( isAlpha, isUpper, toUpper )
abbreviate :: String -> String
abbreviate xs = concatMap upper $ words $ map punctuation xs
    where
        punctuation x
            | x == '\'' = '_'
            | isAlpha x = x
            | otherwise = ' '
        upper w
            | all isUpper w = [head w]
            | otherwise     = toUpper (head w) : filter isUpper (tail w)