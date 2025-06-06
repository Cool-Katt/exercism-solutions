// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  static _usedNames = new Set()
  constructor() {
    this._name = this.generateName()
  }

  generateName() {
    const num = () => Math.floor(Math.random() * 10)
    const char = () => String.fromCharCode(Math.floor(Math.random() * (91 - 65) + 65))
    let name = `${char()}${char()}${num()}${num()}${num()}`
    return name
  }

  reset() {
    this._name = this.setName()
  }

  get name() {
    return this._name
  }

  setName() {
    let name
    do {
      name = this.generateName()
    } while (Robot._usedNames.has(name))
    Robot._usedNames.add(name)
    return name
  }
}

Robot.releaseNames = () => {Robot._usedNames.clear()};
