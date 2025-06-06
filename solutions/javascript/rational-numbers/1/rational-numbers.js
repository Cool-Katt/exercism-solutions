//
// This is only a SKELETON file for the 'Rational Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Rational {  
  constructor(a, b) {
    const gcd = (a, b) => !b ? a : gcd(b, a % b)
    const gcdAB = Math.sign(b) * Math.abs(gcd(a, b))
    this.a = a / gcdAB
    this.b = b / gcdAB
  }

  add(r) {
     return new Rational(this.a * r.b + r.a * this.b, this.b * r.b);
  }

  sub(r) {
    return new Rational(this.a * r.b - r.a * this.b, this.b * r.b);
  }
  mul(r) {
    return new Rational(this.a * r.a, this.b * r.b);
  }
  div(r) {
    return new Rational(this.a * r.b, this.b * r.a);
  }
  abs() {
    return new Rational(Math.abs(this.a), Math.abs(this.b));
  }
  exprational(n) {
    return new Rational(this.a ** Math.abs(n), this.b ** Math.abs(n));
  }
  expreal(r) {
    return (r ** (1 / this.b)) ** this.a;
  }
  
  reduce() {
    return new Rational(this.a, this.b);
  }
}
