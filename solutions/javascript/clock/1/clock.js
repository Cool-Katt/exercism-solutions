//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours = 0, minutes = 0) {
    hours += Math.floor(minutes / 60)
    hours = hours % 24
    minutes  = minutes % 60
    this.hours = (hours < 0) ? hours + 24 : hours
    this.minutes  = (minutes < 0) ? minutes + 60 : minutes
  }

  toString() {
    return `${Clock._pad(this.hours)}:${Clock._pad(this.minutes)}`
  }

  plus(m = 0) {
    return new Clock(this.hours, this.minutes + m)
  }

  minus(m = 0) {
    return new Clock(this.hours, this.minutes - m)
  }

  equals(clock) {
    return this.toString() === clock.toString()
  }

  static _pad = (num) => num < 10 ? '0' + num : num.toString()
}
