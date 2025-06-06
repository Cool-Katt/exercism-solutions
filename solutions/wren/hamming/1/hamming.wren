class Hamming {
  static compute(left, right) {
    if (left.count != right.count) Fiber.abort("strands must be of equal length")

    return (0...left.count).where { |i|
      return left[i] != right[i]
    }.count
  }
}