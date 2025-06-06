//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {
    let primes = this.primes(100)
    if (!primes.includes(p) || !primes.includes(g)) throw new Error();
    this.p = p
    this.g = g
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.p) throw new Error();
    return this.g ** privateKey % this.p
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey ** myPrivateKey % this.p
  }
  
  primes(N) {
    let arr = Array(N + 1).fill(true)
    arr[0] = arr[1] = false
    for (let i = 2; i <= Math.sqrt(N); i++) {
      if (!arr[i]) continue
      for (let j = i * i; j <= N; j += i) {
        arr[j] = false
      }
    }
    return arr.map((bool, i) => bool ? i : bool).filter(v => v)
  }
}
