//
// This is only a SKELETON file for the 'Connect' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Board {
  constructor(strings) {
    this.board = strings.map(s => s.match(/[^\s]/gi)).flatMap((_, i) => _.map((el, j) => [i, j, el]))
    this._xMax = Math.max(...this.board.map((p) => p[0]))
    this._yMax = Math.max(...this.board.map((p) => p[1]))
    this._topO = (p) => p[0] === 0 && p[2] === "O"
    this._leftX = (p) => p[1] === 0 && p[2]=== "X"    
  }
  
  winner() {
    if (this._hexReachable(this._topO, this.board).some((p) => p[0] === this._xMax)) return 'O'
    if (this._hexReachable(this._leftX, this.board).some((p) => p[1] === this._yMax)) return 'X'
    return ''
  }

  _hexReachable(pred, points) {
    function neighbors(point) {
      let [x, y, v] = JSON.parse(point)
      return [[-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0]]
        .map(([s, t]) => JSON.stringify([x + s, y + t, v]))
    }
    let queue = points.filter(pred).map(JSON.stringify)
    points = new Set(points.map(JSON.stringify))
    let visited = new Set()
    while (queue.length) {
      let point = queue.pop()
      visited.add(point)
      neighbors(point)
        .filter((p) => points.has(p))
        .filter((p) => !visited.has(p))
        .forEach((p) => queue.push(p));
      }
    return [...visited].map(JSON.parse)
  }
}
