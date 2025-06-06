//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const TONICS = ["F", "Bb", "Eb", "Ab", "Db", "Gb", "d", "g", "c", "f", "bb", "eb"]
const STEPS = {
    m: 1,
    M: 2,
    A: 3,
}

export class Scale {
  constructor(tonic) {
    this.tonic = tonic
  }

  chromatic() {
    let pitches = (TONICS.includes(this.tonic)
        ? ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"]
        : ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]);
    let index = pitches.indexOf(this.tonic[0].toUpperCase() + this.tonic.slice(1));
    return [...pitches.slice(index), ...pitches.slice(0, index)];
  }

  interval(intervals) {
    let scale = this.chromatic()
    return [scale[0], ...[...intervals]
            .map((a) => (STEPS[a]))
            .reduce((acc, cur) => acc.length === 0 ? [cur] : [...acc, acc[acc.length - 1] + cur], [])
            .map((i) => scale[i % scale.length])];
  }
}
