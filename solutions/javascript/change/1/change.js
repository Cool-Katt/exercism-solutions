//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
  calculate(coinArray, target) {
      if(target < 0) throw new Error('Negative totals are not allowed.')
      let result =[[]]
      for(let i = 1; i <= target; i++) {
        result[i] = coinArray
          .map(data => result[i - data] ? [data, ...result[i - data]] : undefined)
          .sort((a,b) => a.length - b.length)[0]
      }
      if(!result[target]) throw new Error(`The total ${target} cannot be represented in the given currency.`)
      return result[target]
  }
}
