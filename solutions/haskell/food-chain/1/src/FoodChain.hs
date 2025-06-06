module FoodChain (song) where

import Data.List (intercalate)
import Data.Char (toLower)
import Text.Printf (printf)

data Animal = Fly
            | Spider
            | Bird
            | Cat
            | Dog
            | Goat
            | Cow
            | Horse
            deriving (Show, Enum)

showLower :: Show a => a -> String
showLower = map toLower . show

song :: String
song = intercalate "\n" (map verse [Fly .. Horse])

verse :: Animal -> String
verse animal = unlines (swallowed animal : rhyme animal : maybeChain animal)
  where maybeChain Fly = []
        maybeChain Horse = []
        maybeChain animal = chain animal ++ [rhyme Fly]

swallowed :: Animal -> String
swallowed animal = printf "I know an old lady who swallowed a %s." (showLower animal)

chain :: Animal -> [String]
chain animal = zipWith whySwallow predators prey
  where predators = reverse [Fly .. animal]
        prey = tail predators

whySwallow :: Animal -> Animal -> String
whySwallow predator prey = printf "She swallowed the %s to catch the %s%s." (showLower predator) (showLower prey) (describe prey)
  where describe Spider = " that wriggled and jiggled and tickled inside her"
        describe _ = ""

rhyme :: Animal -> String
rhyme Fly = "I don't know why she swallowed the fly. Perhaps she'll die."
rhyme Spider = "It wriggled and jiggled and tickled inside her."
rhyme Bird = "How absurd to swallow a bird!"
rhyme Cat = "Imagine that, to swallow a cat!"
rhyme Dog = "What a hog, to swallow a dog!"
rhyme Goat = "Just opened her throat and swallowed a goat!"
rhyme Cow = "I don't know how she swallowed a cow!"
rhyme Horse = "She's dead, of course!"