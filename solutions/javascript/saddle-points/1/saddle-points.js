//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const saddlePoints = (rows) => {
  let cols = transpose(rows)
  let maxPerRow = rows.map(row => Math.max(...row))
  let minPerCol = cols.map(col => Math.min(...col))
  let saddlePoints = []
  
  rows.forEach((cells, rowNumber) =>
    cells.forEach((cell, columnNumber) => {
      if (cell === maxPerRow[rowNumber] && cell === minPerCol[columnNumber]) {
        saddlePoints.push({ row: rowNumber + 1, column: columnNumber + 1 });
      }
    })
  );
  return saddlePoints;
};

const transpose = grid => grid[0].map((_, c) => grid.map(r => r[c]));
