//
// This is only a SKELETON file for the 'Zebra Puzzle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class ZebraPuzzle {
  constructor() {
    this.sol = solve().next().value;
  }
  waterDrinker() {
    return this.sol.residents[this.sol.drinks.water];
  }
  zebraOwner() {
    return this.sol.residents[this.sol.pets.zebra];
  }
}
function* solve() {
  for (const [red, green, ivory, yellow, blue] of perm5()) {
    if (green - ivory != 1) continue;  // 6.
     for (const [english, spain, ukraine, norway, japan] of perm5()) {
      if (norway != 0) continue;     // 10.
      if (english != red) continue;  // 2.
      for (const [dog, fox, snails, horse, zebra] of perm5()) {
        if (spain != dog) continue;  // 3.
        for (const [coffee, tea, milk, orange, water] of perm5()) {
          if (coffee != green) continue;  // 4.
          if (ukraine != tea) continue;   // 5.
          if (milk != 2) continue;        // 9.
          for (const [oldgold, kools, chesterfields, luckystrike, parliaments]
               of perm5())
          {
            if (oldgold != snails) continue;  // 7.
            if (kools != yellow) continue;    // 8.
            if (Math.abs(chesterfields - fox) != 1) continue;  // 11.
            if (Math.abs(kools - horse) != 1) continue;        // 12.
            if (luckystrike != orange) continue;               // 13.
            if (parliaments != japan) continue;                // 14.
            if (Math.abs(norway - blue) != 1) continue;        // 15.
            yield {
              residents: Object.fromEntries([
                [english, "Englishman"],
                [spain, "Spaniard"],
                [ukraine, "Ukrainian"],
                [norway, "Norwegian"],
                [japan, "Japanese"],
              ]),
              colors: {red, green, ivory, yellow, blue},
              pets: {dog, fox, snails, horse, zebra},
              drinks: {coffee, tea, milk, orange, water},
              brands: {oldgold, kools, chesterfields, luckystrike, parliaments},
            };
          }
        }
      }
    }
  }
}
function* perm5() {
  yield* permutations([0, 1, 2, 3, 4])
}
function* permutations(vals) {
  if (vals.length <= 1) {
    yield vals;
  } else {
    for (const i in vals) {
      [vals[0], vals[i]] = [vals[i], vals[0]];
      for (const p of permutations(vals.slice(1)))
        yield [vals[0], ...p];
      [vals[0], vals[i]] = [vals[i], vals[0]];
    }
  }
}
