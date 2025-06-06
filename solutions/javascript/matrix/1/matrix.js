//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this._rows = matrix.split('\n').map(x => x.split(' ').map(Number))
    this._columns = this.rows[0].map((_, i) => this.rows.map(row => row[i]))
  }

  get rows() {
    return this._rows
  }

  get columns() {
    return this._columns
  }
}
