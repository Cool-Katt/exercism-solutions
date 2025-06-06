//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function convert(numbers, from, to) {
    switch (true) {
        case (!from || !Number.isInteger(from) || from < 2):
            throw new Error('Wrong input base')
        case (!to || !Number.isInteger(to) || to < 2):
            throw new Error('Wrong output base')
        case (numbers.length === 0 || numbers.some(d => d < 0 || d >= from) || (numbers.length > 1 && numbers[0] === 0)):
            throw new Error('Input has wrong format')
    }
    let val = numbers.reduce((val, d) => val * from + d)
    const result = []
    do {
        result.push(val % to)
        val = Math.floor(val / to)
    }
    while (val > 0)
    return result.reverse()
}