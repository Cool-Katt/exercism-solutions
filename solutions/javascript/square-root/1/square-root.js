//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const squareRoot = (num) => {
  let [x, y] = [num, 1]
  while(x > y) {
    x = (x + y)/2
    y = num/x
  } 
  return x
};
