function permutations(arr, k) {
  if (k === 1) {
    return [[...arr]];
  }
  let perms = [];
  perms = [...perms, ...permutations(arr, k - 1)];
  for (let i = 0; i < k - 1; i++) {
    if (k % 2 === 0) {
      [arr[i], arr[k - 1]] = [arr[k - 1], arr[i]];
    } else {
      [arr[0], arr[k - 1]] = [arr[k - 1], arr[0]];
    }
    perms = [...perms, ...permutations(arr, k - 1)];
  }
  return perms
}
const after = (right, left) => 1 === right - left;
const nextTo = (house1, house2) => (1 === house1 - house2) || (1 == house2 - house1);
export class ZebraPuzzle {
  constructor() {
    this.nationalities = ["Englishman", "Spanish", "Ukrainian", "Japanese", "Norwegian"];
    this.solution = this.solve();
  }
  solve() {
    const solution = [];
    const perms = permutations([1, 2, 3, 4, 5], 5);
    for (let [red, green, ivory, yellow, blue] of perms) {
      if (after(green, ivory)) {
        for (let [englishman, spanish, ukrainian, japanese, norwegian] of perms) {
          if (englishman === red && norwegian === 1 && nextTo(norwegian, blue)) {
            for (let [dog, snails, fox, horse, zebra] of perms) {
              if (spanish === dog) {
                for (let [coffee, tea, milk, orangeJuice, water] of perms) {
                  if (milk === 3 && coffee === green && ukrainian === tea) {
                    for (let [oldGold, kools, chesterfields, luckyStrike, parliaments] of perms) {
                      if (oldGold === snails && 
                          kools === yellow && 
                          nextTo(chesterfields, fox) && 
                          nextTo(kools, horse) && 
                          luckyStrike === orangeJuice && 
                          japanese === parliaments) {
                        solution.push([water, zebra, englishman, spanish, ukrainian, japanese, norwegian]);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return solution;
  }
  waterDrinker() {
    return this.nationalities[this.solution[0].slice(2).indexOf(this.solution[0][0])];
  }
  zebraOwner() {
    return this.nationalities[this.solution[0].slice(2).indexOf(this.solution[0][1])];
  }
}
