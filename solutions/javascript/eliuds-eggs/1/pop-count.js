//
// This is only a SKELETON file for the 'Poker' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const eggCount = (displayValue) => 
  [...displayValue.toString(2)].reduce((acc, curr) => curr === '1' ? acc += 1 : acc, 0)
