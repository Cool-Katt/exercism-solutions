//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...items) => {
  if (items.length < 1) return ''
  let qualifier = items.slice(-1)[0] instanceof Object ? items.pop().qualifier + ' ' : ''
  return items
    .slice(1)
    .map((v, i) => `For want of a ${items[i]} the ${v} was lost.\n`)
    .join('')
    + `And all for the want of a ${qualifier}${items[0]}.`;
};
