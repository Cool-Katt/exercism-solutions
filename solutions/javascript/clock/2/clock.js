//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  static MINUTES_PER_HOUR = 60
  static HOURS_PER_DAY = 24
  
  constructor(hours = 0, minutes = 0) {
    hours += Math.floor(minutes / Clock.MINUTES_PER_HOUR)
    this.hours = ((hours % Clock.HOURS_PER_DAY) + Clock.HOURS_PER_DAY) % Clock.HOURS_PER_DAY;
    this.minutes = ((minutes % Clock.MINUTES_PER_HOUR) + Clock.MINUTES_PER_HOUR) % Clock.MINUTES_PER_HOUR;
  }

  toString() {
    return `${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}`
  }

  plus(m = 0) {
    return new Clock(this.hours, this.minutes + m)
  }

  minus(m = 0) {
    return this.plus(-m)
  }

  equals(clock) {
    return this.toString() === clock.toString()
  }
}
