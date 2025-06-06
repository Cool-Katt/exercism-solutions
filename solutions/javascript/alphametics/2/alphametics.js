//
// This is only a SKELETON file for the 'Alphametics' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const solve = (puzzle) => {
  let [solution, ...problem] = puzzle.match(/\w+/gi).reverse()

  return withBacktracking(problem, solution)
};

function withBacktracking(words, result) {
  let returnValues = new Map()
  let usedValues = new Set()
  let leadChars = new Set(result[0])
  let WORDS_COUNT = words.length
  let MAX_WORD_LEN = result.length

  //early stop in case there is no solution, else populate leadChars
  for (let i = 0; i < WORDS_COUNT; ++i) {
    if (words[i].length > MAX_WORD_LEN) return null
    leadChars.add(words[i][0])
  }
  return helper(1, 0, 0)

  function helper(digit, wordIdx, carry) {
    if (digit > MAX_WORD_LEN) return true

    if (wordIdx === WORDS_COUNT) {
      let resultNum = carry % 10
      let resultChar = result[MAX_WORD_LEN - digit]
      let isUsed = returnValues.has(resultChar)
      if (
        (!isUsed && usedValues.has(resultNum))
        || (isUsed && returnValues.get(resultChar) !== resultNum)
        || (resultNum === 0 && leadChars.has(resultChar))
      ) return false
      usedValues.add(resultNum)
      returnValues.set(resultChar, resultNum)
      if (helper(digit + 1, 0, (carry - resultNum) / 10)) return true
      !isUsed && usedValues.delete(resultNum) && returnValues.delete(resultChar)
      return false
    }

    const idx = words[wordIdx].length - digit
    if (idx < 0) return helper(digit, wordIdx + 1, carry)
    const char = words[wordIdx][idx]
    if (returnValues.has(char)) return helper(digit, wordIdx + 1, carry + returnValues.get(char))
    for (const testDigit of [...Array(10).keys()]) {
      if (usedValues.has(testDigit) || (testDigit === 0 && leadChars.has(char))) continue
      usedValues.add(testDigit)
      returnValues.set(char, testDigit)
      if (helper(digit, wordIdx + 1, carry + testDigit)) return Object.fromEntries(returnValues)
      usedValues.delete(testDigit)
      returnValues.delete(char)
    }

    return null
  }
};