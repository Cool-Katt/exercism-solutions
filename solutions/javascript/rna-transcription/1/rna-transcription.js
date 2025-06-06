//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let rna = ''
  for (let n of dna) {
    rna += compliments[n]
  }
  return rna
};

const compliments = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U',
}