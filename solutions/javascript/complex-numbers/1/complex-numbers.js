//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(real = 0, imag = 0) {
    this.real = real
    this.imag = imag
  }

  add(num) {
    return new ComplexNumber((this.real + num.real), (this.imag + num.imag))
  }

  sub(num) {
    return new ComplexNumber((this.real - num.real), (this.imag - num.imag))
  }

  mul(num) {
    return new ComplexNumber(
      (this.real * num.real - this.imag * num.imag), 
      (this.imag * num.real + this.real * num.imag))
  }

  div(num) {
    return new ComplexNumber(
      (this.real * num.real + this.imag * num.imag) / (num.real ** 2 + num.imag ** 2),
      (this.imag * num.real - this.real * num.imag) / (num.real ** 2 + num.imag ** 2))
  }

  get abs() {
    return Math.sqrt(this.real * this.real + this.imag * this.imag);
  }

  get conj() {
     return new ComplexNumber(this.real, this.imag === 0 ? 0 : -this.imag);
  }

  get exp() {
    return new ComplexNumber(Math.E ** this.real).mul(new ComplexNumber(Math.cos(this.imag), Math.sin(this.imag)));
  }
}
