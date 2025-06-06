//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna = '') => {
  const aminoAcid = CODONS[rna.slice(0, 3)]
  if (!aminoAcid) throw new Error('Invalid codon')
  return aminoAcid === 'STOP' ? [] : [aminoAcid, ...translate(rna.slice(3))]
};

const CODONS = {
  '': 'STOP', UAG: 'STOP', UAA: 'STOP', UGA: 'STOP',
  AUG: 'Methionine',
  UAC: 'Tyrosine', UAU: 'Tyrosine',
  UCA: 'Serine', UCC: 'Serine', UCG: 'Serine', UCU: 'Serine',
  UGC: 'Cysteine', UGU: 'Cysteine',
  UGG: 'Tryptophan',
  UUA: 'Leucine', UUG: 'Leucine',
  UUC: 'Phenylalanine', UUU: 'Phenylalanine',
}