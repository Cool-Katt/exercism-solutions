//
// This is only a SKELETON file for the 'Binary Search Tree' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BinarySearchTree {
  constructor(data) {
    this.data = data
    this.left = this.right = null
  }

  insert(newItem) {
    let direction = (newItem <= this.data) ? "left" : "right"
    this[direction] ? this[direction].insert(newItem) : this[direction] = new BinarySearchTree(newItem)
  }

  each(f) {
    this.left && this.left.each(f)
    f(this.data)
    this.right && this.right.each(f)
  }
}
