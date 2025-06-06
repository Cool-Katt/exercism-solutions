//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this._school = {}
  }
  
  roster() {
    return JSON.parse(JSON.stringify(this._school))
  }

  add(student, grade) {
    for (let key in this._school) {
      this._school[key].includes(student) && this._school[key].splice(this._school[key].indexOf(student), 1)
    }
    if (this._school[grade]) {
      this._school[grade].push(student)
      this._school[grade].sort()
    } else {
      this._school[grade] = [student] 
    } 
  }

  grade(targetGrade) {
    return JSON.parse(JSON.stringify(this._school[targetGrade] || []))
  }
}
