//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (stringToCheck) => {
  let set = new Set(stringToCheck.toLowerCase().replace(/[^a-z]/g, '').split(''))
  return set.size === 26
};
