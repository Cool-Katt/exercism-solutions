//
// This is only a SKELETON file for the 'Atbash Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alpha = Array.from(Array(26)).map((e, i) => i + 97).map((x) => String.fromCharCode(x));

export const encode = (text, encode = true) => {
  let encoded = text.toLowerCase().replace(/\s+/gi, '').split('')
    .map(char => {
      let ind = alpha.indexOf(char), revAlpha = alpha.reverse()
      return char.match(/\d/g) ? char : revAlpha[ind]
    })
    .join('').match(/.{1,5}/g) ?? []
  return encode ? encoded.join(' ') : encoded.join('')
};

export const decode = (text) => encode(text, false)
