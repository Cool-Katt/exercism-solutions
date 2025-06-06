//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (str) => {
  str = str.replaceAll(' ', '').split('').reverse().join('')
  if (/[^\d]/.test(str) || str.length === 1) return false
  let reg = /\d/gi
  let matches = []
  str.match(reg).forEach((m, i) => {
    i % 2 === 1 ? 
      (m * 2 > 9 ? matches.push(m * 2 - 9) : matches.push(m * 2)) :
      matches.push(m * 1)
  })
  let reduced = matches.reduce((acc, curr) => acc + curr, 0)
  return reduced % 10 === 0
};
