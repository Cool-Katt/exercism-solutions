class Squares {
  var num : Int
  init(_ num : Int){ self.num = num }
  var squareOfSum : Int { let sum = num * (num + 1) / 2 ; return sum * sum }
  var sumOfSquares : Int { (num * (num + 1) * (2 * num + 1)) / 6 }
  var differenceOfSquares : Int { squareOfSum - sumOfSquares }
}