//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const HEADER = "Team                           | MP |  W |  D |  L |  P"
export function tournamentTally(input) {
  if (!input) return HEADER
  const teams = input.split('\n').reduce((acc, currentValue) => {
    const [one, two, result] = currentValue.split(';')
    
    acc[one] = acc[one] || [0, 0, 0, 0, 0]
    acc[two] = acc[two] || [0, 0, 0, 0, 0]
    
    acc[one][0]++
    acc[two][0]++
    switch(result) {
      case 'win':
        acc[one][1]++
        acc[one][4] += 3
        acc[two][3]++
        break
      case 'loss':
        acc[two][1]++
        acc[two][4] += 3
        acc[one][3]++
        break
      default:
        acc[one][2]++
        acc[two][2]++
        acc[one][4]++
        acc[two][4]++
        break
    }
    return acc
  }, {})
  let rows = Object.keys(teams)
    .sort((a, b) => teams[b][4] - teams[a][4] || a[0].localeCompare(b[0]))
    .map(team => [
      team.padEnd(30),
      ...teams[team].map((num) => `${num}`.padStart(2))
    ].join(' | '))
  return [HEADER, ...rows].join('\n')
}
