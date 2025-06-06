//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    this.series = [...series].map(Number)
  }

  slices(sliceLength) {
    if (!this.series.length) {throw new Error('series cannot be empty')}
    if (sliceLength > this.series.length) {throw new Error('slice length cannot be greater than series length')}
    if (!sliceLength) {throw new Error('slice length cannot be zero')}
    if (sliceLength < 0) {throw new Error('slice length cannot be negative')}

    return this.series
        .map((digit, index, digits) => digits.slice(index, index + sliceLength))
        .filter(digit => digit.length === sliceLength)
  }
}
