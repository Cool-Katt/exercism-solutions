//
// This is only a SKELETON file for the 'Word Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export default class WordSearch {
  constructor(grid) {
    this.grid = grid.join('')
    this.line_length = grid[0].length
  }
  
  #cordCorr(index) {
    return [ Math.floor(index / this.line_length) + 1, (index % this.line_length) + 1 ]
  }
  
  #formater(match, word) {
    if (!match) return -1
    return {
      "start": this.#cordCorr(match.index),
      "end": this.#cordCorr(match.index + match[0].length - 1)
    }
  }
  
  #regexes(word) {
    return [
      new RegExp(word),
      new RegExp(word.split("").join(".{" + (this.line_length-2) + "}")),
      new RegExp(word.split("").join(".{" + (this.line_length-1) + "}")),
      new RegExp(word.split("").join(".{" + (this.line_length  ) + "}")),
    ]
  }
  
  #result(word) {
    return this.#regexes(word)
      .map(regexp => regexp.exec(this.grid))
      .map(match => this.#formater(match, word))
      .find(result => result != -1);
  }
  
  #reverseRes(word) {
    let res = this.#result(word)
    if (!res) return undefined
    return {
      "start": res["end"],
      "end": res["start"]
    }
  }
  
  #match(word) {
    return this.#result(word) || this.#reverseRes(word.split("").reverse().join(""))
  }
  
  find(words) {
    return words.reduce((acc, word) => { acc[word] = this.#match(word); return acc }, {});
  }
}
