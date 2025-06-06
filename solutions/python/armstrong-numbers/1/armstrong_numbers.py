def is_armstrong_number(number):
    res = [y ** len(str(number)) for y in [int(x) for x in str(number)]]
    return number == sum(res)