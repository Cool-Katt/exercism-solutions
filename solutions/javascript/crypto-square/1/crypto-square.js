//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  constructor(text) {
    let formated = text.toLowerCase().replace(/\W/g, '')
    let col = Math.ceil(Math.sqrt(formated.length))
    let row = Math.round(Math.sqrt(formated.length))
    this.ciphertext = Array(col).fill(0).map((_,j) => formated.split("")
      .filter((_, i) => i % col === j).join("").padEnd(row)).join(" ");
  }
}
