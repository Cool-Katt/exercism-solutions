//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class InputCell {
  constructor(value) {
    this.value = value
    this.children = []
  }
  setValue(value) {
    this.value = value
    this.children.forEach(cell => cell.update())
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this._inputCells = inputCells
    this._inputCells.forEach(cell => cell.children.push(this))
    this._fn = fn
    this.children = []
    this._callbacks = []
    this._value = this.value
  }
  get value() {
    this._value = this._fn(this._inputCells)
    return this._value
  }
  update(){
    if(this._value == this.value) return
    this._callbacks.forEach(cb => cb.addValue(this))
    this.children.forEach(child => child.update())
  }
  addCallback(cb) {
    this._callbacks.push(cb);
  }
  removeCallback(cb) {
    let cbIndex = this._callbacks.indexOf(cb);
    if(cbIndex >= 0)
      this._callbacks.splice(cbIndex, 1)
  }
}

export class CallbackCell {
  constructor(fn) {
    this.values = []
    this.fn = fn
  }
  addValue(input) {
    this.values.push(this.fn(input))
  }
}
