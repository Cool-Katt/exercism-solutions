//
// This is only a SKELETON file for the 'Go Counting' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const coord2str = (x, y) => String([x, y]);
const str2coord = (c) => c.split(",").map(Number);

export class GoCounting {
  constructor(board) {
    this.board = board
  }
  onBoard(x, y) {
    if (y === undefined) return this.onBoard(...x.split(","))
    return this.at(x, y) !== undefined
  }
  at(x, y) {
    return this.board[Number(y)]?.[Number(x)]
  }
  getTerritory(x, y) {
    if (!this.onBoard(x, y)) return { error: "Invalid coordinate" }
    const colors = new Set()
    const coords = new Set()
    const queue = [coord2str(x, y)]
    while (queue.length) {
      const [x, y] = str2coord(queue.pop())
      const col = this.at(x, y)
      if (col != " ") {
        colors.add(col == "B" ? "BLACK" : "WHITE")
        continue
      }
      coords.add(coord2str(x, y))
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const c = coord2str(x + dx, y + dy)
        if (this.onBoard(c) && !queue.includes(c) && !coords.has(c))
          queue.push(c)
      }
    }
    const owner = coords.size && colors.size == 1 ? [...colors][0] : "NONE"
    const territory = [...coords].sort().map((c) => str2coord(c))
    return { owner, territory }
  }
  getTerritories() {
    const undecided = new Set(
      this.board.flatMap((row, y) =>
        [...row].flatMap((c, x) => c == " " ? [coord2str(x, y)] : []))
    );
    const t = { BLACK: [], WHITE: [], NONE: [] }
    while (undecided.size) {
      const [x, y] = str2coord(undecided.values().next().value)
      const { owner, territory } = this.getTerritory(x, y)
      t[owner] = [...t[owner], ...territory]
      for (const [x, y] of territory)
        undecided.delete(coord2str(x, y))
    }
    return {
      territoryBlack: t.BLACK,
      territoryWhite: t.WHITE,
      territoryNone: t.NONE,
    }
  }
}