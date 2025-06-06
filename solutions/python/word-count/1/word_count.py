import re
from collections import Counter

def count_words(sentence):
    words = [word for word in re.findall(r"[a-zA-Z0-9]+(?:'\w+)?", sentence.lower())]
    return Counter(words)