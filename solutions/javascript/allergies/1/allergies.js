//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  static list = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']
  constructor(number) {
    this.number = number
  }

  list() {
    return Allergies.list.filter(item => this.allergicTo(item));
  }

  allergicTo(alergen) {
    let test = 2 ** Allergies.list.indexOf(alergen)
    return (test & this.number) === test;
  }
}
