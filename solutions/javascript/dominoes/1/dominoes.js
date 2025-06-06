//
// This is only a SKELETON file for the 'Dominoes' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const chain = (dominoes) => {
  if (dominoes.length === 1 && dominoes[0][0] !== dominoes[0][1]) return null
  const results = step(dominoes.slice(0, 1), dominoes.slice(1))
  return results === [] || results[0] === undefined ? null : results[0]
};

function step(front, back) {
  if (back.length === 0) return [front]
  const next_digit = front[front.length - 1][1]
  const flipped_back = back.map(x => x[1] === next_digit && !(x[0] === next_digit) ? [x[1], x[0]] : x)
  const solutions = flipped_back
    .flatMap((el, idx) => el[0] === next_digit ? [idx] : [])
    .flatMap(idx => step(front.concat([flipped_back[idx]]), flipped_back
                         .slice(0, idx)
                         .concat(flipped_back
                                 .slice(idx + 1))))
  return solutions
}