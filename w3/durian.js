class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  get numberInBetweenCeoAndEmployee() {

    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }

  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }

  employeesThatMakeOver(amount) {

    let employees = []; // 1

    if (this.salary > amount) {
      employees.push(this); // 2
    }

    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver =
        subordinate.employeesThatMakeOver(amount); // 3
      employees = employees.concat(subordinatesThatMakeOver);
    }

    return employees;
  }

  get totalEmployees() {

    let totalEmployees = 1; // (the employee himself/herself/ this )

    if (this.subordinates.length === 0) {
      return totalEmployees = 1; //2
    }

    for (const subordinate of this.subordinates) {
      const subordinateSubs = subordinate.totalEmployees; //3 recursion
      totalEmployees += subordinateSubs;
    }

    return totalEmployees;
  }

}

const ada = new Employee("Ada", "CEO", 3000000.00);
const craig = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);
const david = new Employee('david', 'marketing lead', 600000)
const brain = new Employee('brain', 'marketing associate', 650000)
const florida = new Employee('florida', 'marketing analyst', 500000)
const ali = new Employee('ali', 'software developer', 700000)
const simone = new Employee('simone', 'software analyst', 600000)
const carla = new Employee('carla', 'retail analyst', 500000)

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

phil.addSubordinate(david);
phil.addSubordinate(brain);
phil.addSubordinate(florida);

craig.addSubordinate(ali);
craig.addSubordinate(simone);

angela.addSubordinate(carla);


console.log(ada.totalEmployees)