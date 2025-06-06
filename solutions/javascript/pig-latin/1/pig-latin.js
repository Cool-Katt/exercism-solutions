//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (words) => {
  return words.split(' ').map(word => splitAtIndex(word, indexOfFirstVowel(word)) + 'ay').join(' ');
};

const indexOfFirstVowel = string => string.search(/[aeio]|(?<!q)u|(?<=\w)y|xr|yt/i);
const splitAtIndex = (string, index) => string.slice(index) + string.slice(0, index);