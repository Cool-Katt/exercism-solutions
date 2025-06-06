//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (input, size) => {
  if (size === 0) {return 1}
  if (input.length < size) {throw new Error('Span must be smaller than string length')} 
  if (size < 0) {throw new Error('Span must be greater than zero')}
  if (/\D/g.test(input)) {throw new Error('Digits input must only contain digits')}

  let series = [...input].map(Number)
    .map((digit, index, digits) => digits.slice(index, index + size))
    .filter(digit => digit.length === size)
    .map(i => i.reduce((acc, cur) => acc *= cur, 1))
    
  return Math.max(...series)
};
