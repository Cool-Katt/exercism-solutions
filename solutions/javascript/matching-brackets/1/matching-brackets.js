//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (str) => {
  str = str.replaceAll(/[^{}\[\]\(\)]/g, '')
  let tempStr = ''
  do {
    tempStr = str
    str = str.replace(/\{\}|\[\]|\(\)/g, '')
  } while (tempStr !== str)
  return str.length === 0
};
