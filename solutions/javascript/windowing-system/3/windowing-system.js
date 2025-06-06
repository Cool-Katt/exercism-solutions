// @ts-check

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
}

export class ProgramWindow  {
  constructor(){
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position = new Position()
  }

  resize(newSize) {
    this.size.resize(this.#applyChange(newSize.width, 1, this.screenSize.width, this.position.x), 
                     this.#applyChange(newSize.height, 1, this.screenSize.height, this.position.y))
  }

  move(newPosition) {
    this.position.move(this.#applyChange(newPosition.x, 0, this.screenSize.width, this.size.width), 
                       this.#applyChange(newPosition.y, 0, this.screenSize.height, this.size.height))
  }

  #applyChange(target, minSize, calcA, calcB) {
    const newTarget = target > minSize ? target : minSize
    const maxDimention = calcA - calcB
    return maxDimention > newTarget ? newTarget : maxDimention
  }
}

export function changeWindow(newProgramWindow) {
  let newSize = new Size(400, 300)
  let newPoz = new Position(100, 150)
  newProgramWindow.resize(newSize)
  newProgramWindow.move(newPoz)
  return newProgramWindow
}