//
// This is only a SKELETON file for the 'Custom Set' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class CustomSet {
  constructor(collection = []) {
    this.collection = collection
  }

  empty() {
    return this.collection.length === 0
  }

  contains(num) {
    return this.collection.includes(num)
  }

  add(num) {
    !this.contains(num) && this.collection.push(num)
    return this
  }

  subset(other) {
    return this.collection.every(val => other.contains(val))
  }

  disjoint(other) {
    return this.collection.every(val => !other.contains(val))
  }

  eql(other) {
    return this.collection.length === other.collection.length && this.subset(other)
  }

  union(other) {
    other.collection.forEach(val => !this.contains(val) && this.collection.push(val))
    return this
  }

  intersection(other) {
    this.collection = this.collection.filter(val => other.contains(val))
    return this
  }

  difference(other) {
    this.collection = this.collection.filter(val => !other.contains(val))
    return this
  }
}
