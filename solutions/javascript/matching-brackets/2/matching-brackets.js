//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (str) => {
  str = str.replaceAll(/[^{}\[\]\(\)]/g, '')
  let regEx = /\{\}|\[\]|\(\)/g
  while (regEx.test(str)) {
    str = str.replace(regEx, '')
  } 
  return str.length === 0
};
