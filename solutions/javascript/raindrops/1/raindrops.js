//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  let drops = '';
  (number % 3 === 0) && (drops += 'Pling');
  (number % 5 === 0) && (drops += 'Plang');
  (number % 7 === 0) && (drops += 'Plong');

  return drops !== '' ? drops : String(number)
};
