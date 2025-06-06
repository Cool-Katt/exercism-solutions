//
// This is only a SKELETON file for the 'Alphametics' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const solve = (puzzle) => {
  let [last, ...rest] = puzzle.match(/\w+/gi).reverse()
  let expressions = [rest.reverse(), [last]]

  return tryPermutations(expressions.flat(), countLetters(expressions))
};

const evalPermutation = (letterCounts, digits) => letterCounts
  .reduce((sum, [, count], i) => sum + count * digits[i], 0) === 0
  ? Object.fromEntries(letterCounts.map(([letter], i) => [letter, digits[i]]))
  : null

const tryPermutations = (terms, letterCounts, digits = []) => {
  if (digits.length === letterCounts.length) return evalPermutation(letterCounts, digits)
  for (const testDigit of [...Array(10).keys()]) {
    if ([
      digits.includes(testDigit),
      testDigit === 0 && terms.some(term => term[0] === letterCounts[digits.length][0])
    ].some(assertion => assertion)) continue
    const result = tryPermutations(terms, letterCounts, [...digits, testDigit])
    if (result) return result
  }
  return null
};

const countLetters = expressions => Object.entries(expressions
  .reduce((counts, exp, right) => exp.reduce((counts, term) => [...term].reduceRight((counts, letter, i, { length }) =>
    ({ ...counts, [letter]: ~~counts[letter] + 10 ** (length - 1 - i) * (right ? -1 : 1) }),
    counts), counts), {}))

