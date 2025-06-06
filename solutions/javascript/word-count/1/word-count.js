//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (words) => {
  let map = new Map()
  let regex = /\w+'\w+|\w+/gi
  words.match(regex).forEach(w => {
    let lower = w.toLowerCase()
    if (map.has(lower)) {
      map.set(lower, map.get(lower) + 1)
    } else {
      map.set(lower, 1)
    }
  })
  return Object.fromEntries(map)
};
