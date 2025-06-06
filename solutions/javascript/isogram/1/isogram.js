//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (word) => {
  word = word.replaceAll(' ', '').replaceAll('-', '')
  return word.length === new Set(word.toLowerCase()).size
};
