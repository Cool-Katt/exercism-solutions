//
// This is only a SKELETON file for the 'Beer Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const recite = (initialBottlesCount, takeDownCount) => {
  const cap = (str) => str.replace(/./i, (char) => char.toUpperCase())
  let out = []
  for(let i = initialBottlesCount; i > initialBottlesCount - takeDownCount; i--) {
    let countOrNoMore = i === 0 ? 'no more' : `${i}`
    let plural = i === 1 ? '' : 's'
    let itOrOne = i == 1 ? 'it' : 'one'
    let noMoreOrPrevCount = i - 1 == 0 ? 'no more': i - 1
    let secondPlural = i - 1 == 1 ? '' : 's'
    out.push(`${cap(countOrNoMore)} bottle${plural} of beer on the wall, ${countOrNoMore} bottle${plural} of beer.`)
    if(i - 1 === -1) {
      out.push('Go to the store and buy some more, 99 bottles of beer on the wall.')
    } else {
      out.push(`Take ${itOrOne} down and pass it around, ${noMoreOrPrevCount} bottle${secondPlural} of beer on the wall.`)
    }
    if(initialBottlesCount - takeDownCount != i - 1) out.push('')
  }
  return out
};
