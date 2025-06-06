//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primes = (N) => {
  let arr = Array(N + 1).fill(true)
  arr[0] = arr[1] = false
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (!arr[i]) continue
    for (let j = i * i; j <= N; j += i) {
      arr[j] = false
    }
  }
  return arr.map((bool, i) => bool ? i : bool).filter(v => v)
};
