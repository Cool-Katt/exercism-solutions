// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let total = 0
  for (let index = 0; index < birdsPerDay.length; index++) {
    total += birdsPerDay[index]
  }
  return total
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let total = 0
  let offsetWeek = 7 * (week - 1)
  for (let index = 0; index < 7; index++) {
    total += birdsPerDay[index + offsetWeek]
  }
  return total
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let index = 0; index < birdsPerDay.length; index++) {
    if (index % 2 == 0) {
      birdsPerDay[index] += 1
    }
  }
  return birdsPerDay
}
