const ROMANS = ((1000, "M"),(900 , "CM"),(500 , "D"),(400 , "CD"),(100 , "C"),(90 , "XC"),(50 , "L"),(40 , "XL"),(10 , "X"),(9 , "IX"),(5 , "V"),(4 , "IV"),(1 , "I"))

function to_roman(number::Integer)
    if number <= 0
        error("number must be positive")
    end

    roman = ""
    for (k, v) in ROMANS
        while k <= number
            roman *= v
            number -= k
        end
    end
    roman
end