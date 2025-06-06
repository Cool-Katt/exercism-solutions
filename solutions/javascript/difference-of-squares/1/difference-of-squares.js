//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(N = 0) {
    this.sum = (N * (N + 1) * (2 * N + 1)) / 6;
    this.square = ((N * (N + 1)) / 2) * ((N * (N + 1)) / 2)
  }

  get sumOfSquares() {
    return this.sum
  }

  get squareOfSum() {
    return this.square
  }

  get difference() {
    return Math.abs(this.sum - this.square)
  }
}
