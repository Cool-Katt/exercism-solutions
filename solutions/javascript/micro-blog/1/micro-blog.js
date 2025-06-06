//
// This is only a SKELETON file for the 'Micro-blog' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const truncate = (input) =>
  Array.from(new Intl.Segmenter().segment(String(input)), (x) => x.segment)
    .slice(0, 5)
    .join('');