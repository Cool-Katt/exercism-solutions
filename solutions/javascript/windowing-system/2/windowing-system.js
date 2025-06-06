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
    const targetWidth = newSize.width > 1 ? newSize.width : 1;
    const maxWidth = this.screenSize.width - this.position.x;
    const newWidth = maxWidth > targetWidth ? targetWidth : maxWidth;

    const targetHeight = newSize.height > 1 ? newSize.height : 1;
    const maxHeight = this.screenSize.height - this.position.y;
    const newHeight = maxHeight > targetHeight ? targetHeight : maxHeight;

    this.size.resize(newWidth, newHeight);
  }

  move(newPosition) {
    const targetX = newPosition.x > 0 ? newPosition.x : 0;
    const maxX = this.screenSize.width - this.size.width;
    const newX = maxX > targetX ? targetX : maxX;

    const targetY = newPosition.y > 0 ? newPosition.y : 0;
    const maxY = this.screenSize.height - this.size.height;
    const newY = maxY > targetY ? targetY : maxY;

    this.position.move(newX, newY);
  }
}

export function changeWindow(newProgramWindow) {
  let newSize = new Size(400, 300)
  let newPoz = new Position(100, 150)
  newProgramWindow.resize(newSize)
  newProgramWindow.move(newPoz)
  return newProgramWindow
}