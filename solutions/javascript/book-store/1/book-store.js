//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const CART_VALUES = [0, 800, 800 * 2 * 0.95, 800 * 3 * 0.9, 800 * 4 * 0.8, 800 * 5 * 0.75]

export const cost = (books) => {
  let groups = {}, cart = {}
  let cartGroupsSize = []
  books.map((value, index) => ({ index, value, group: groups[value] = (groups[value] || 0 ) + 1 }))
      .sort((a, b) => a.group - b.group || a.value - b.value)
      .map(({ value, group }) => {cart[group] ? cart[group].push(value) : cart[group] = [value]})
  Object.values(cart).forEach(a => cartGroupsSize.push(a.length))

  while (cartGroupsSize.includes(5) && cartGroupsSize.includes(3)) {
    cartGroupsSize.splice(cartGroupsSize.indexOf(5), 1, 4)
    cartGroupsSize.splice(cartGroupsSize.indexOf(3), 1, 4)
  }
  
  let final = cartGroupsSize.reduce((acc, curr) => acc += CART_VALUES[curr], 0)
  return final
};
