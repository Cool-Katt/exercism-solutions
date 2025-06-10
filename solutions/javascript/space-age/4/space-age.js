//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function age(planet, seconds) {
  // Please don't do things like this. I only did it for the LOLZ
  mappingHelper[planet] ?? (() => { throw new Error('not a planet') })();
  return Math.round(seconds / EARTH_SECONDS / mappingHelper[planet] * 100) / 100;
};

const EARTH_SECONDS = 31557600

const mappingHelper = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
}