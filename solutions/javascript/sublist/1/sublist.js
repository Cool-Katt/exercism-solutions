//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list = []) {
    this.list = list
  }

  compare(other) {
    let sup = this.list.toString().includes(other.list.toString())
    let sub = other.list.toString().includes(this.list.toString())
    switch (true) {
      case sub && sup: return 'EQUAL'
      case sub: return 'SUBLIST'
      case sup: return 'SUPERLIST'
      default: return 'UNEQUAL'
    }
  }
}
