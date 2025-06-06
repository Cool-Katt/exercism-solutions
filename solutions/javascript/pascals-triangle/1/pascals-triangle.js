//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (num) => {
   function pascalRecursive(numberOfRows, rowContent) {
      if (numberOfRows === 0 ) return []
      if (numberOfRows < 2) return rowContent

      let prevRow = rowContent[rowContent.length-1]
      let curRow = [1]

      for (let i = 1; i < prevRow.length; i++) {
        curRow[i] = prevRow[i] + prevRow[i-1]
      }
      curRow.push(1)
      rowContent.push(curRow)

      return pascalRecursive(numberOfRows - 1, rowContent)
    }

  return pascalRecursive(num, [[1]])
};
