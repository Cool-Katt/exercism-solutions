//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  let rad = x ** 2 + y ** 2
  return rad > 100 ? 0 : rad > 25 ? 1 : rad > 1 ? 5 : 10;
};
