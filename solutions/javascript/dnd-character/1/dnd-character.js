//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (num) => {
  if(num > 18) throw new Error('Ability scores can be at most 18');
  if(num < 3) throw new Error('Ability scores must be at least 3');

  return Math.floor((num - 10) / 2)
};

export class Character {
  constructor() {
    this.strength = Character.rollAbility()
    this.dexterity = Character.rollAbility()
    this.constitution = Character.rollAbility()
    this.intelligence = Character.rollAbility()
    this.wisdom = Character.rollAbility()
    this.charisma = Character.rollAbility()
    this.hitpoints = abilityModifier(this.constitution) + 10
  }
  
  static rollAbility() {
    return Array(4).fill(0)
      .map(() => Math.floor(Math.random() * (7 - 1) + 1))
      .sort()
      .slice(1)
      .reduce((acc, cur) => acc += cur, 0)
  }
}
