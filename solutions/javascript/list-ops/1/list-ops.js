//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(arr = []) {
    this.values = arr
  }

  append(list) {
    this.values = [...this.values, ...list.values]
    return this
  }

  concat(list) {
    for (let l of list.values) {
      this.append(l)
    }
    return this
  }

  filter(pred) {
    let filteredList = []
    for (let item of this.values) {
      pred(item) && filteredList.push(item)
    }
    return new List(filteredList)
  }

  map(callback) {
    let mappedList = []
    for (let item of this.values) {
      mappedList.push(callback(item))
    }
    return new List(mappedList)
  }

  length() {
    return this.values.length
  }

  foldl(callback, initial) {
    let acc = initial 
    for (let item of this.values) {
      acc = callback(acc, item)
    }
    return acc
  }

  foldr(callback, initial) {
    let acc = initial
    for (let i = this.values.length - 1; i >= 0; i--) {
      acc = callback(acc, this.values[i])
    }
    return acc
  }

  reverse() {
    let reversedList = []
    for (let i = this.values.length - 1; i >= 0; i--) {
      reversedList.push(this.values[i])
    }
    return new List(reversedList)
  }
}
