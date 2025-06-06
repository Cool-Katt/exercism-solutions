from math import prod

def largest_product(series, size):
    if size == 0:
        return 1
    if len(series) < size:
        raise ValueError("span must be smaller than string length")
    if not series.isdigit():
        raise ValueError("digits input must only contain digits")
    if  size < 0:
        raise ValueError("span must not be negative")
    
    toInt = [int(item) for item in series]
    slidingWindow = (toInt[i:i + size] for i in range(len(series) - size + 1))
    prods = (prod([*j]) for j in slidingWindow)
    return max(prods)
