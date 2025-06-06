// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

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

  resize(newSize){
    if (newSize.width < 1) newSize.resize(1, newSize.height);
    if (newSize.height < 1) newSize.resize(newSize.width, 1);
    if ((newSize.width + this.position.x) >= this.screenSize.width) 
      newSize.resize((this.screenSize.width - this.position.x), newSize.height);
    if ((newSize.height + this.position.y) >= this.screenSize.height) 
      newSize.resize(newSize.width, (this.screenSize.height - this.position.y));
    this.size = newSize
  }

  move(newPoz){
    if (newPoz.x < 0) newPoz.move(0, newPoz.y);
    if (newPoz.y < 0) newPoz.move(newPoz.x, 0);
    if ((newPoz.x + this.size.width) >= this.screenSize.width) 
      newPoz.move((this.screenSize.width - this.size.width), newPoz.y);
    if ((newPoz.y + this.size.height) >= this.screenSize.height) 
      newPoz.move(newPoz.x, (this.screenSize.height - this.size.height));
    this.position = newPoz
  }
}

export function changeWindow(newProgramWindow) {
  let newSize = new Size(400, 300)
  let newPoz = new Position(100, 150)
  newProgramWindow.resize(newSize)
  newProgramWindow.move(newPoz)
  return newProgramWindow
}