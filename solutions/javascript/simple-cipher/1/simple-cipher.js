//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  #key
  #shift
  constructor(key) {
    this.#key = key ?? this.generateKey()
    this.#shift = [...this.#key].map(char => Cipher.shiftTo0(char))
  }

  encode(plaintext) {
    let encoded = [...plaintext].map((char, i) =>
      (Cipher.shiftTo0(char) + this.#shift[i % this.#shift.length]) % 26 + 97)
    return String.fromCharCode(...encoded)
  }

  decode(encoded) {
    let decoded = [...encoded].map((char, i) =>
      (Cipher.shiftTo0(char) - this.#shift[i % this.#shift.length] + 26) % 26 + 97)
    return String.fromCharCode(...decoded)
  }

  get key() {
    return this.#key
  }

  generateKey(length) {
    const char = () => String.fromCharCode(Math.floor(Math.random() * (91 - 65) + 65))
    let reps = length ?? 100
    let key = ''
    while(reps--) {
      key += char()
    }
    return key.toLowerCase()
  }

  static shiftTo0 = (char) => char.toLowerCase().charCodeAt(0) - 97
}
