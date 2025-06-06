//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  switch (true) {
    case number < 1:
      throw new Error('Only positive numbers are allowed')
    case number === 1:
      return 0
    default:
      return 1 + steps(number % 2 === 0 ? number / 2 : 3 * number + 1)
  }
}
