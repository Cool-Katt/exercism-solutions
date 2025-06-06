//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const say = (n) => {
  if (n < 0 || n >= 1e12) throw new Error('Number must be between 0 and 999,999,999,999.')
  let d = 0, r = 0
  let div = setDiv(n)
  switch (true) {
    case n <= 20: return SPELLED[n]
    case n < 100: 
      d = Math.floor(n / div) * div
      return (n - d == 0) ? SPELLED[d] : `${say(d)}-${say(n - d)}`
    default: 
      d = Math.floor(n / div)
      r = n - d * div
      return (r == 0) ? `${say(d)} ${SPELLED[div]}` : `${say(d)} ${SPELLED[div]} ${say(r)}`
  }
};

const setDiv = (n) => {
  switch (true) {
    case n < 1000: return '1'+'0'.repeat(n.toString().length - 1)
    case n < 1000000: return 1000
    case n < 1000000000: return 1000000
    default: return 1000000000
  }
}

const SPELLED = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety', 100: 'hundred', 1000: 'thousand', 1000000: 'million', 1000000000: 'billion'}
