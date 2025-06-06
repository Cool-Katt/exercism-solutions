//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (raw) => {
  let formated = raw.match(/\d|X$/gi) ?? []
  console.log(formated)
  return [
    digits => digits.length === 10,
    digits => digits.reduce((sum, digit, i) => sum + (digit === 'X' ? 10 : digit) * (10 - i), 0) % 11 === 0
  ].every(check => check(formated))
};
