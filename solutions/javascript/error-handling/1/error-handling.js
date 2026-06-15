//
// This is only a SKELETON file for the 'Error handling' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const processString = (input) => {
   try {
     if (!input) return null
     if (typeof input != 'string') throw new TypeError('not a string')
     if (input.length < 10 || input.length > 100) throw new RangeError('bad length')
     if (/\d/.test(input) && /[a-z]/i.test(input)) throw new SyntaxError('mixed')
     return input.toUpperCase()
  } catch (e) {
     throw e
  }
};
