//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {
  static DIRECTIONS = ['north', 'east', 'south', 'west'];
  constructor() {
    this.bearing = 'north'
    this.coordinates = [0, 0]
  }
  
  place({ x, y, direction }) {
    if (!Robot.DIRECTIONS.includes(direction)) throw new InvalidInputError()
    this.bearing = direction
    this.coordinates = [x, y]
  }

  evaluate(instructions) {
    let offset = Robot.DIRECTIONS.indexOf(this.bearing)
    for (let ins of [...instructions]) {
      switch (ins) {
        case 'R': offset = (offset + 5) % 4; break;
        case 'L': offset = (offset + 3) % 4; break;
        case 'A': 
          switch (offset) {
            case 0: this.coordinates[1]++; break;
            case 1: this.coordinates[0]++; break;
            case 2: this.coordinates[1]--; break;
            case 3: this.coordinates[0]--; break;
          }
      }
      this.bearing = Robot.DIRECTIONS[offset]
    }
  }
}
