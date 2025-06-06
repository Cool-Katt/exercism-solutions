//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class LinkedListNode {
  constructor(data, next = null, prev = null) {
    this.data = data
    this.next = next
    this.prev = prev
  }
}

export class LinkedList {
  constructor() {
    this.next = this
    this.prev = this
    this._count = 0
  }
  
  push(v) {
    let node = new LinkedListNode(v, this.prev.next, this.prev)
    this.prev.next = node
    this.prev = node
    this._count++
  }
  
  pop() {
    let node = this.prev
    this.prev = node.prev
    node.prev.next = node.next
    this._count--
    return node.data
  }
  
  shift() {
    let node = this.next
    this.next = node.next
    node.next.prev = node.prev
    this._count--
    return node.data
  }
  
  unshift(v) {
    let node = new LinkedListNode(v, this.next, this.next.prev)
    this.next.prev = node
    this.next = node
    this._count++
  }
  
  delete(v) {
    for (let node = this.next; node != this; node = node.next) {
      if (node.data === v) {
        node.prev.next = node.next
        node.next.prev = node.prev
        this._count--
        break
      }
    }
  }
  count() {
    return this._count
  }
}
