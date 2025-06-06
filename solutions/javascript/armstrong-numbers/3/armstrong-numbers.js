//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => 
  number === [...number.toString(10)].map(Number).reduce((acc, cur, _, self) => acc += Math.pow(cur, self.length), 0)