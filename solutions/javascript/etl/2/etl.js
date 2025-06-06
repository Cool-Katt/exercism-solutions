//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (data) => {
  const scores = {};
  Object.keys(data).forEach((points) => {
      data[points].forEach((letter) => {
        scores[letter.toLowerCase()] = Number(points);
      });
    });
  return scores;
};
