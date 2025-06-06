//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    [this.sideA, this.sideB, this.sideC] = [...sides] 
    this.setOfSides = new Set([...sides])
  }

  testSides() {
    return this.sideA > 0 && this.sideB > 0 && this.sideC > 0
  }

  testLength() {
    return (this.sideA + this.sideB < this.sideC) ||
      (this.sideB + this.sideC < this.sideA) ||
      (this.sideA + this.sideC < this.sideB)
  }

  isTriangle() {
    return this.testSides() && !this.testLength()
  }

  get isEquilateral() {
    return this.isTriangle() && (this.setOfSides.size === 1)
  }

  get isIsosceles() {
    return this.isTriangle() && (this.setOfSides.size <= 2)
  }

  get isScalene() {
    return this.isTriangle() && (this.setOfSides.size === 3)
  }
}
