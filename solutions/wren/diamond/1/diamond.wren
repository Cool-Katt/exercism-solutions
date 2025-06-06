class Diamond {
  static rows(letter) {
    if (letter == "A") return ["A"]

    return ((asciiFor(letter) - 1)..asciiFor("A")).reduce([row(letter, letter)]) { |rows, i|
      var new = row(letter, charFor(i))
      rows.add(new)
      rows.insert(0, new)
      return rows
    }
  }

  static row(which, current) {
    var padding = offset(which) - offset(current)
    var row = List.filled(offset(which) * 2 + 1, " ")
    row[padding] = current
    row[-(padding + 1)] = current
    return row.join()
  }

  static asciiFor(letter) { letter.bytes[0] }
  static charFor(ascii) { String.fromByte(ascii) }
  static offset(letter) { asciiFor(letter) - asciiFor("A") }
}