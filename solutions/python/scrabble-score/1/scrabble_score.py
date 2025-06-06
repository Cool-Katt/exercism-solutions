KEYS = "AEIOULNRSTDGBCMPFHVWYKJXQZ"
SCORES = [1] * 10 + [2] * 2 + [3] * 4 + [4] * 5 + [5] * 1 + [8] * 2 + [10] * 2

def score(word):
    return sum(SCORES[KEYS.index(letter)] for letter in word.upper())