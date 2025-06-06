//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (str) => 
  str.replace(/\s/g, '')
     .split('')
     .reverse()
     .map(c => parseInt(c))
     .map((v, i) => i % 2 === 0 ? v : (v > 4 ? v * 2 - 9 : v * 2))
     .reduce((acc, curr) => acc + curr, 0) % 10 === 0 && str.replace(/\s/g, '').length > 1