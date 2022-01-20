class Person {

  constructor(name, fact) {
    this.name = name;
    this.fact = fact;
  }

  bio() {
    return `My name is ${this.name}. My quirky fact is ${this.fact}.`
  }
}

class Student extends Person {

  constructor(name, fact, email) {
    //comes from super class
    super(name, fact);
    //comes from constructor for student
    this.email = email;
  }

  //set must have a value
  set enrol(cohort) {
    if (cohort === 'Sep' || cohort === 'Oct' || cohort === 'Nov') {
      this.cohort = cohort;
    }
  }

  set tuition(fees) {
    this.paid = fees;
  }

  //get returns a value, it must Return. it has no arguement
  get tuition() {
    this.remaining = 10000 - this.fees;
    if (this.remaining === 0) {
      return this.TuitionPending = 'Pending';
    } else {
      return this.TuitionPending = 'Paid';
    }
  }

}

const ujjawal =
  new Student('ujjawal', 'funny', 'ujj@gmail.com');

ujjawal.enrol = 'Sdfdfdp';
ujjawal.tuition = 525555;

console.log(ujjawal.tuition)


