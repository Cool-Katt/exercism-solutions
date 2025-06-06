def largest_product(series, size):
    if size == 0:
        return 1
    if len(series) < size:
        raise ValueError("span must be smaller than string length")
    if not series.isdigit():
        raise ValueError("digits input must only contain digits")
    if  size < 0:
        raise ValueError("span must not be negative")
    lst = []
    for i in range(0, len(series) - size + 1):
        prod = 1
        for j in series[i:i+size]:
            prod *= int(j)
        lst.append(prod)
    return max(lst)
