// 'this' keyword within the constructor refers to the individual instance of the class (the individual student)

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName
    this.lastName = lastName
    this.grade = year
    this.tardies = 0
    this.scores = []
    this.average = 0
  }
  // instance methods
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}.`
  }
  markLate() {
    this.tardies++
    if(this.tardies >= 3) {
      return 'You are expelled!'
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} time(s)`
  }
  addScore(score) {
    this.scores.push(score)
    return this.scores
  }
  calculateAverage() {
    let sum = this.scores.reduce(function(a,b) {return a+b})
    this.average = sum/this.scores.length
    return sum/this.scores.length
  }

  // class method
  static enrollStudents() {
    return 'ENROLLING STUDENTS'
  }
}

// instantiating new instance of the class
let student1 = new Student('James', 'Hudson', 3)
let student2 = new Student('Sara', 'Hudson')  // grade is undefined until next line of code
student2.grade = 1


// Calling the class method (utility function)
// console.log(Student.enrollStudents())


// console.log(student1)  // Student { firstName: 'James', lastName: 'Hudson', grade: 3 }
// console.log(student1.grade)  // 3
// console.log(student2)

// console.log(student1.fullName())
// console.log(student2.fullName())

// console.log(student1)
// console.log(student1.markLate())
// console.log(student1.markLate())
// console.log(student1.markLate())
// console.log(student1)

// console.log(student2)
// console.log(student2.addScore(95))
// console.log(student2.addScore(92))
// console.log('Average:', student2.calculateAverage())
// console.log(student2)


// --------------------------------------------
// --------------------------------------------
// --------------------------------------------

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  // class method
  static distance(a, b) {
    const dx = a.x - b.x
    const dy = a.y - b.y

    return Math.hypot(dx, dy)
  }
}

const p1 = new Point(5, 5)
const p2 = new Point(10, 10)


console.log(p1)
console.log(p2)
console.log(Point.distance(p1, p2))