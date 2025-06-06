//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (input) => {
  let splitLines = input.split('\n')
  let output = ''
  for(let r = 0; r < splitLines.length; r += 4){
    for(let c = 0; c < splitLines[r].length; c += 3){
      let width = c + 3
      let number = splitLines[r].slice(c, width) + 
                   splitLines[r + 1].slice(c, width) +
                   splitLines[r + 2].slice(c, width) + 
                   splitLines[r + 3].slice(c, width);
      output += MAPPING.includes(number) ? MAPPING.indexOf(number) : '?';
    }
    (r + 4) < splitLines.length && (output += ',')
  }
  return output
};

const MAPPING = [' _ | ||_|   ', '     |  |   ',  ' _  _||_    ',  ' _  _| _|   ',  '   |_|  |   ',  ' _ |_  _|   ',  ' _ |_ |_|   ',  ' _   |  |   ',  ' _ |_||_|   ',  ' _ |_| _|   ',];