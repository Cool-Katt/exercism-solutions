//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  let list = [...number.toString(10)].map(Number)
  return number === list.reduce((acc, cur) => acc += Math.pow(cur, list.length), 0)
};
