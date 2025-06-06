//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Song {
  verse(n) {
    let verse = `I know an old lady who swallowed a ${animals[n - 1].name}.\n`
    if (n > 1) verse += animals[n - 1].reaction + "\n"
    if (n < animals.length) {
      for (let i = n - 1; i > 0; i--) {
        verse +=`She swallowed the ${animals[i].name} to catch the ${animals[i - 1].name}${animals[i - 1].special || ""}.\n`
      }
      verse += `I don't know why she swallowed the ${animals[0].name}. Perhaps she'll die.\n`
    }
    
    return verse
  }

  verses(start, finish) {
    let song = ""
    for (let i = start; i <= finish; i++) {
      song += this.verse(i) + "\n"
    }
    return song
  }
}


const animals = [ 
  {name: "fly"}, 
  {name: "spider", 
   reaction: "It wriggled and jiggled and tickled inside her.", 
   special: " that wriggled and jiggled and tickled inside her"
  }, 
  {name: "bird", reaction: "How absurd to swallow a bird!"}, 
  {name: "cat", reaction: "Imagine that, to swallow a cat!"}, 
  {name: "dog", reaction: "What a hog, to swallow a dog!"}, 
  {name: "goat", reaction: "Just opened her throat and swallowed a goat!"}, 
  {name: "cow", reaction: "I don't know how she swallowed a cow!"}, 
  {name: "horse", reaction: "She's dead, of course!"}
];