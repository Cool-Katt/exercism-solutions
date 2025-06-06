//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const flatten = (arrayLike) => {
  return arrayLike.reduce((acc, el) => acc.concat(Array.isArray(el) ? flatten(el) : el != null ? [el] : []), []);
};