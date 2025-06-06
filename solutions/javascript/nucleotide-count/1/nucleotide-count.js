//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
  let nucs = [0, 0, 0, 0];
  [...strand].forEach(n => {
    if (!['A', 'C', 'G', 'T'].includes(n)) {
      throw new Error('Invalid nucleotide in strand')
    } else {
      nucs[['A', 'C', 'G', 'T'].indexOf(n)]++
    }
  })
  return nucs.join(' ')
}
