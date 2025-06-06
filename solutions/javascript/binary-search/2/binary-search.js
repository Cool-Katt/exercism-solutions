//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const find = (array, lookFor, start = 0, end = array.length - 1) => {
  array.sort((a, b) => a - b)
  let midIndex = Math.floor((end + start) / 2)
  switch (true) {
    case start > end: throw new Error('Value not in array')
    case lookFor < array[midIndex]: return find(array, lookFor, start, midIndex - 1)
    case lookFor > array[midIndex]: return find(array, lookFor, midIndex + 1, end)
    case lookFor === array[midIndex]: return midIndex
  }
};
