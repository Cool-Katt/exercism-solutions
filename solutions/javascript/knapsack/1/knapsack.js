//
// This is only a SKELETON file for the 'Knapsack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const knapsack = (maximumWeight, items) => {
  let sack = Array(maximumWeight + 1).fill(0)
  for (const item of items)
    for (let w = maximumWeight; w >= item.weight; w--)
      sack[w] = Math.max(sack[w], sack[w - item.weight] + item.value)
  return sack[maximumWeight]
};
