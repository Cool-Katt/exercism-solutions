class AllYourBase {
  static rebase(inputBase, digits, outputBase) {
    if (inputBase < 2) Fiber.abort("input base must be >= 2")
    if (outputBase < 2) Fiber.abort("output base must be >= 2")
    if (digits.any { |d| d < 0 || d >= inputBase } ) Fiber.abort("all digits must satisfy 0 <= d < input base")
    
    var decimal = digits.reduce(0) { |acc, digit| acc * inputBase + digit }
    var result = []
    while (decimal != 0) {
      result.insert(0, decimal % outputBase)
      decimal = (decimal / outputBase).truncate
    }
    return result.isEmpty ? [0] : result
  }
}
