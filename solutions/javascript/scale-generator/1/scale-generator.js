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
  static chromaticMaker(tonic) {
    let pitches = (TONICS.includes(tonic)
        ? ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"]
        : ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]);
    let index = pitches.indexOf(tonic[0].toUpperCase() + tonic.slice(1));
    return [...pitches.slice(index), ...pitches.slice(0, index)];
  }
  
  constructor(tonic) {
    this.tonic = tonic
  }

  chromatic() {
    return Scale.chromaticMaker(this.tonic)
  }

  interval(intervals) {
    return intervals
      .slice(0, -1)
      .split("")
      .map((x) => STEPS[x])
      .reduce((acc, x, i) => acc.concat(acc[i] + x), [0])
      .map((x) => Scale.chromaticMaker(this.tonic)[x])
  }
}
