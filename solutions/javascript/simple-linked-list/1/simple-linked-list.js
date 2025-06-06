//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
  constructor(data, next = null) {
    this.value = data
    this.next = next
  }
}

export class List {
  constructor(values = []) {
    this.head = null
    this.length = 0
    values.forEach(value => this.add(new Element(value)))
  }

   *[Symbol.iterator]() {
    for (let node = this.head; node != null; node = node.next) {
      yield node.value
    }
  }

  add(nextValue) {
    nextValue.next = this.head
    this.head = nextValue
    this.length++
  }

  toArray() {
    return [...this]
  }

  reverse() {
    return new List(this.toArray())
  }
}
