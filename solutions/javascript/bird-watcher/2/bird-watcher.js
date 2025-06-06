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
export const totalBirdCount = (birdsPerDay) => birdsPerDay.reduce((result, dayCount) => result + dayCount, 0)

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export const birdsInWeek = (birdsPerDay, week) => totalBirdCount(birdsPerDay.slice((week - 1) * 7, week * 7));

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export const fixBirdCountLog = (birdsPerDay) =>
  (birdsPerDay.map((_, index) => (index % 2 === 0 && birdsPerDay[index]++) || birdsPerDay), birdsPerDay)

