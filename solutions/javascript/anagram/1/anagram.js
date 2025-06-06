//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target, candidates) => {
  let targetSet = [...target.toLowerCase()].sort().join("");
  let matches = candidates.filter(w => {
    return w.toLowerCase() !== target.toLowerCase() && [...w.toLowerCase()].sort().join("") === targetSet
  })
  return matches
};
