export class Triangle {
  private sideA: number
  private sideB: number
  private sideC: number
  private setOfSides: Set<number>
  
  constructor(...sides: number[]) {
    [this.sideA, this.sideB, this.sideC] = [...sides]
    //this.sideA = sides[0]
    //this.sideB = sides[1]
    //this.sideC = sides[2]
    this.setOfSides = new Set([...sides])
  }
  testSides() {
    return (this.sideA > 0 && this.sideB > 0 && this.sideC > 0)
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