def sum_of_multiples(limit, factors):
    multiples = set()
    for factor in factors:
        if 0 < factor < limit:
            multiples.update(range(factor, limit, factor))
    return sum(multiples)
