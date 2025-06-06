//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const spiralMatrix = (size) => {
  const reverse = m => [...m].reverse();

  const transpose = m => m[0].map((c, i) => m.map (r => r[i]))
  
  const rotate = m => transpose(reverse(m))
    
  const makeSpiral = (xs, rows) => {
    return xs.length < 2
      ? [[...xs]]
      : [xs.slice(0, xs .length / rows),
          ...rotate(makeSpiral(xs.slice(xs.length / rows), xs.length / rows))]
  }
    
  const range = (lo, hi) => [...Array(hi - lo + 1)].map((_, i) => lo + i)
  
  const generateMatrix = (n) => makeSpiral(range(1, n * n), n)
  
  return size <= 0 ? [] : generateMatrix(size)
};
