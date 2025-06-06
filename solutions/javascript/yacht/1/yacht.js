//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (array, category) => {
  switch (category) {
        case 'yacht': return array.every(d => d === array[0]) ? 50 : 0
        case 'ones': return count(array, 1)
        case 'twos': return count(array, 2) * 2
        case 'threes': return count(array, 3) * 3
        case 'fours': return count(array, 4) * 4
        case 'fives': return count(array, 5) * 5
        case 'sixes': return count(array, 6) * 6
        case 'full house': return multiple(array, 3) && multiple(array, 2) ? sum(array) : 0
        case 'four of a kind': return (multiple(array, 4) || multiple(array, 5) || 0) * 4
        case 'little straight': return isStraight(array, 1) ? 30 : 0
        case 'big straight': return isStraight(array, 2) ? 30 : 0
        case 'choice': return sum(array)
    }
};


const count = (dice, n) => dice.filter(d => d === n).length
const multiple = (dice, n) => dice.find(d => dice.filter(f => f === d).length === n)
const isStraight = (dice, n) => dice.sort().every((d, i) => d === i + n)
const sum = dice => dice.reduce((acc, cur) => acc + cur, 0)
