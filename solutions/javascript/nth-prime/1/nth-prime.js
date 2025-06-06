//
// This is only a SKELETON file for the 'Nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const prime = (N) => {
  let num = 1, count = 0
  if (N === 0) throw new Error('there is no zeroth prime')
  while (count < N) {
    num++
    for (var i = 2; i <= num; i++) {
      if (num % i == 0) break;
    }
    if (i == num) count++
  }
  return num
};
