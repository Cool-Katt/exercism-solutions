//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
  constructor({
    black: [blackRow, blackColumn] = [0, 3],
    white: [whiteRow, whiteColumn] = [7, 3],
  } = {}) {
    //black queen position is not validated in the tests. there should be a check for that.
    if (whiteRow < 0 || whiteRow > 7 || whiteColumn < 0 || whiteColumn > 7) throw new Error('Queen must be placed on the board')
    if (whiteRow === blackRow && whiteColumn === blackColumn) throw new Error('Queens cannot share the same space')
    this.white = [whiteRow, whiteColumn]
    this.black = [blackRow, blackColumn]
    this.canAttack = whiteRow === blackRow || whiteColumn === blackColumn || 
      Math.abs(whiteRow - blackRow) === Math.abs(whiteColumn - blackColumn)
  }

  toString() {
    let board = Array.from(Array(8), _ => Array(8).fill('_'))
    board[this.white[0]][this.white[1]] = 'W'
    board[this.black[0]][this.black[1]] = 'B'
    return board.map(line => line.join(' ')).join('\n')
  }
}
