class RLE {
  static encode(s) {
    var prev = ""
    return s.reduce([]) {|runs, char|
        if (prev != char) {
          prev = char
          runs.add([char, 1])
        } else {
          runs[-1] = [runs[-1][0], runs[-1][1] + 1]
        }
        return runs
      }
      .map {|run| run[1] == 1 ? [run[0], ""] : run}
      .map {|run| "%(run[1])%(run[0])"}
      .join()
  }
  static decode(s) {
    var count = 0
    return s.reduce([]) {|pieces, char|
        if (isDigit(char)) {
          count = count * 10 + Num.fromString(char)
        } else {
          pieces.add(strRepeat(char, 1.max(count)))
          count = 0
        }
        return pieces
      }
      .join()
  }
  static isDigit(char) { "0123456789".contains(char) }
  static strRepeat(char, count) { List.filled(count, char).join() }
}