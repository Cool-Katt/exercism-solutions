//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scoresArr = []) {
    this.scores = scoresArr
    this.latest = scoresArr[scoresArr.length - 1]
  }

  get personalBest() {
    return Math.max(...this.scores)
  }

  get personalTopThree() {
    return [...this.scores].sort((a, b) => b - a).slice(0, 3)
  }
}
