//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (items, level) => {
  let set = new Set();
  [...Array(level - 1).keys()].map(el => ++el).forEach(i => {
    items.forEach(item => i % item === 0 && set.add(i))
  })
  return Array.from(set).reduce((a, b) => a + b, 0)
};
