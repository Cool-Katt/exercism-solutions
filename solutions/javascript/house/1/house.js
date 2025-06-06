//
// This is only a SKELETON file for the 'House' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class House {
  static verse(num) {
    let v = VERSES.slice(-num)
    v[0] = v[0].replace(/\(.+\)/, "This is")
    return v.map(s => s.replace(/($\s|[()])/g,""))
  }

  static verses(start, finish) {
    let song = [];
    for (let v = start; v <= finish; v++) {
      song = song.concat(v === start ? this.verse(v) : [""].concat(this.verse(v)))
    }
    return song;
  }
}

const VERSES = [
  "(This is) the horse and the hound and the horn",
  "(that belonged to) the farmer sowing his corn",
  "(that kept) the rooster that crowed in the morn",
  "(that woke) the priest all shaven and shorn",
  "(that married) the man all tattered and torn",
  "(that kissed) the maiden all forlorn",
  "(that milked) the cow with the crumpled horn",
  "(that tossed) the dog",
  "(that worried) the cat",
  "(that killed) the rat",
  "(that ate) the malt",
  "(that lay in) the house that Jack built."
]
