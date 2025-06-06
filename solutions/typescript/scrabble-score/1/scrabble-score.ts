
export const score = (word: string): number => {
  if (word) {
    let oneP = (word.match(/[A|E|I|O|U|L|N|R|S|T]/gi) || []).length
    let twoP = (word.match(/[D|G]/gi) || []).length * 2
    let threeP = (word.match(/[B|C|M|P]/gi) || []).length * 3
    let fourP = (word.match(/[F|H|V|W|Y]/gi) || []).length * 4
    let fiveP = (word.match(/[K]/gi) || []).length * 5
    let eightP = (word.match(/[J|X]/gi) || []).length * 8
    let tenP = (word.match(/[Q|Z]/gi) || []).length * 10
    return oneP + twoP + threeP + fourP + fiveP + eightP + tenP
  } else {
    return 0
  }
};
