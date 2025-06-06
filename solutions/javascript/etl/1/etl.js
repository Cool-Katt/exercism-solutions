//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (data) => {
  let tempMap = new Map()
  for (let points in data) {
    for (let letter of data[points]) {
      tempMap.set(letter.toLowerCase(), Number(points))
    }
  }
  //let mapSorted = new Map([...tempMap.entries()].sort());
  return Object.fromEntries(tempMap)
};
