export const toRna = (dna: string): string => {
  let rna = ''
  for (let n of dna) {
    rna += compliments[n as keyof typeof compliments] ?? throwError()
  }
  return rna
};

const compliments = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U',}
const throwError = (): never => {throw new Error('Invalid input DNA.')}