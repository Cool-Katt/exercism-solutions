export function isArmstrongNumber(number: (bigint | number)): boolean {
  return BigInt(number) === [...number.toString(10)]
    .map(BigInt)
    .reduce((acc, cur, _, self) => acc += (cur ** BigInt(self.length)), BigInt(0))
}
