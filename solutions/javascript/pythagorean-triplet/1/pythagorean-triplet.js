//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function triplets({ minFactor = 0, maxFactor, sum }) {
  if (!maxFactor) maxFactor = sum
  let trips = []
  
  for (let a = minFactor; a < Math.min(sum / 3, maxFactor); a++) {
    const a_sq = a ** 2
    
    for (let b = a + 1; b < Math.min(sum * 2/3, maxFactor); b++) {
      const c = sum - a - b
      
      if (c > b && c < maxFactor && c**2 === a_sq + b**2) {
        trips.push(new Triplet(a, b, c))
      }
    }
  }
  return trips
}

class Triplet {
  constructor(a, b, c) {
    this.triplet = [a, b, c]
  }

  toArray() {
    return this.triplet
  }
}
