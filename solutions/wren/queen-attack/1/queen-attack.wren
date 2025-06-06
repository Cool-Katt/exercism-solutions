class QueenAttack {
  static new() { this.new({}) }
  construct new(pieces) {
    _white = pieces["white"] || [7, 3]
    _black = pieces["black"] || [0, 3]
    if ((_white + _black).any {|i| !(0..7).contains(i)}) {
      Fiber.abort("Queen must be placed on the board")
    }
    if (_white[0] == _black[0] && _white[1] == _black[1]) {
      Fiber.abort("Queens cannot share the same space")
    }
  }
  white { _white }
  black { _black }
  toString {
    var board = (0...8).map {List.filled(8, "_")}.toList
    board[_white[0]][_white[1]] = "W"
    board[_black[0]][_black[1]] = "B"
    return board.map {|row| row.join(" ")}.join("\n")
  }
  canAttack { _white[0] == _black[0] || _white[1] == _black[1] || (_white[0] - _black[0]).abs == (_white[1] - _black[1]).abs }
}
