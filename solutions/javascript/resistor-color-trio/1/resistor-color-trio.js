//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ResistorColorTrio {
  constructor(colors) {
    if (colors.some((color) => !COLORS.includes(color))) throw new Error("invalid color")
    let [one, two, three] = colors
    this.value = ((COLORS.indexOf(one) * 10) + (COLORS.indexOf(two))) * (10 ** COLORS.indexOf(three))
    let check = this.value > 999
    this.label = `Resistor value: ${check ? Math.floor(this.value/1000) : this.value} ${check ? 'kilo' : ''}ohms`
  }
}

const COLORS = [
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ]
