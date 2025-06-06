//
// This is only a SKELETON file for the 'Bowling' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Bowling {
  constructor() {
    this.rolls = []  
    this.current = []
  }
  
  roll(pins) {
    if (this.rolls.length === 10) throw new Error('Cannot roll after game is over')
    if (pins < 0) throw new Error('Negative roll is invalid')
    if (pins > 10) throw new Error('Pin count exceeds pins on the lane')
    
    this._tally(pins, this.current.length +1)
  }
  
  _tally(roll, rollNum) {
    console.log(roll, rollNum)
    switch (rollNum) {
      case 1:
        if (!(this.rolls.length === 9) && roll === 10) {
          this.rolls.push([10])
        } else {
          this.current.push(roll)
        }
        break;
      case 2:
        let [first_] = this.current
        if (first_ < 10 && (first_ + roll > 10)) throw new Error('Pin count exceeds pins on the lane')
        if (!(this.rolls.length === 9) || (first_ + roll < 10)) {
          this.rolls.push([this.current.shift(), roll])
        } else {
          this.current.push(roll)
        }
        break;
      case 3:
        let [first, second] = this.current;
        if (first === 10 && second < 10 && (second + roll > 10)) throw new Error('Pin count exceeds pins on the lane')
        this.rolls.push([first, second, roll])
        break;
    }
  }
  
  score() {
    if (!(this.rolls.length === 10)) throw new Error('Score cannot be taken until the end of the game')
    
    const rolls = this.rolls.reduce((flat, list) => flat.concat(list), [])
    let score = 0
    for (let frame = 1; rolls.length > 0; frame ++) {
      if (frame === 10) {
        score += rolls.splice(0).reduce((sum, roll) => sum + roll, 0);
      } else if (rolls[0] === 10) {
        score += rolls.shift() + rolls[0] + rolls[1]
      } else if (rolls[0] + rolls[1] === 10) {
        score += rolls.shift() + rolls.shift() + rolls[0]
      } else {
        score += rolls.shift() + rolls.shift()
      }
    }
    return score
  }
}
