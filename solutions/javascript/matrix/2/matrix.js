//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.rows = matrix.split('\n').map(x => x.split(' ').map(Number))
    this.columns = this.rows[0].map((_, i) => this.rows.map(row => row[i]))
  }
}
