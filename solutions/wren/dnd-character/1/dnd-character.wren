import "random" for Random
var Rand = Random.new()

class Util {
  static abilityModifier(n) {
    if (n < 3) Fiber.abort("Ability scores must be at least 3")
    if (n > 18) Fiber.abort("Ability scores can be at most 18")
    return ((n - 10) / 2).floor
  }
} 

class Character {
  static rollAbility() { Rand.int(3, 18) }
  construct new() {
    _abilities = (0..6).map { Character.rollAbility() }.toList
  }
  strength { _abilities[0] }
  dexterity { _abilities[1] }
  constitution { _abilities[2] }
  intelligence { _abilities[3] }
  wisdom { _abilities[4] }
  charisma { _abilities[5] }
  
  hitpoints { 10 + Util.abilityModifier(constitution) }
}