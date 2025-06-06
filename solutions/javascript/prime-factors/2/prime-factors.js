//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (number) => {
  const factors = [];
  let divisor = 2;

  while (number >= 2) {
    number % divisor === 0 ? factors.push(divisor) && (number /= divisor) : divisor++
  }
  return factors
};
