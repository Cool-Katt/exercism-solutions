//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const countMines = (j) => (line) =>
  [...line.substring(j - 1, j + 2)]
    .reduce((acc, c) => c === '*' ? acc + 1 : acc, 0);

const countMinesMulti = (lines, i, j) =>
  lines
    .slice((i === 0) ? 0 : i - 1, i + 2)
    .map(countMines(j))
    .reduce((acc, x) => acc + x, 0);

export const annotate = (lines) =>
  lines.map(
    (line, i) => [...line]
      .map((c, j) => (c === ' ')
        ? countMinesMulti(lines, i, j) || ' '
        : c)
      .join('')
  );