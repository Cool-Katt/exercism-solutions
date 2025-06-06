//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const actions = {
  4: 'wink',
  3: 'double blink',
  2: 'close your eyes',
  1: 'jump',
  0: 'reverse',
}

export const commands = (number) => {
  let res = []
  let binary = number.toString(2).padStart(5, 0);
  [...binary].forEach((item, index) => {
    if (item === '1') {
      res.unshift(actions[index])
    }
  })
  if (res.includes('reverse')) {
    res.splice(res.indexOf('reverse'), 1)
    res.reverse()
  }
  
  return res
};
