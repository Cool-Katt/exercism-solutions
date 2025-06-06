//
// This is only a SKELETON file for the 'Kindergarten Garden' exercise.
// It's been provided as a convenience to get you started writing code faster.
//

const DEFAULT_STUDENTS = ['Alice','Bob','Charlie','David','Eve','Fred','Ginny','Harriet','Ileana','Joseph','Kincaid','Larry',];

const PLANT_CODES = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
};

export class Garden {
  constructor(diagram, students = DEFAULT_STUDENTS) {
    this.diagram = diagram.split('\n')
    this.students = students.sort()
  }

  plants(student) {
    let i = this.students.indexOf(student)
    return this.diagram.map(row => row.slice(2 * i, 2 * i + 2)).flatMap(row => [...row].map(p => PLANT_CODES[p]))
  }
}
