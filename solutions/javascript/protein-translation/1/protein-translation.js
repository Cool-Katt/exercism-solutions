//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna) => {
  let output = []
  if (!rna) return output
  for (const codon of rna.match(/(.{1,3})/g))
  {
    let protein = CODONS[codon];
    if (!protein) throw new Error('Invalid codon')
    if (protein === 'STOP') break
    output.push(protein)
  }
  return output
};

const CODONS = {
  UAG: "STOP", UAA: "STOP", UGA: "STOP",
  AUG: "Methionine",
  UAC: "Tyrosine", UAU: "Tyrosine",
  UCA: "Serine", UCC: "Serine", UCG: "Serine", UCU: "Serine",
  UGC: "Cysteine", UGU: "Cysteine",
  UGG: "Tryptophan",
  UUA: "Leucine", UUG: "Leucine",
  UUC: "Phenylalanine", UUU: "Phenylalanine",
}