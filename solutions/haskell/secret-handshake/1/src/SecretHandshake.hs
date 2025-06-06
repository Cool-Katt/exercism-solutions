module SecretHandshake (handshake) where

import Data.Bits ( Bits(testBit) )

handshake :: Int -> [String]
handshake n = if testBit n 4 then reverse h else h
    where
        h = [a | (a, b) <- actions, testBit n b]
        actions = zip ["wink", "double blink", "close your eyes", "jump"] [0..]