//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strand1, strand2) => {
  let dist = 0 
  if ([...strand1].length !== [...strand2].length) {
    throw new Error('strands must be of equal length')
  } else {
    let len = [...strand1].length
    for (let i = 0; i < len; i++) {
      [...strand1][i] !== [...strand2][i] && dist++
    }
  }
  

  return dist
};
