class Person {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
    }

    fullName() {
        return `${this.name} ${this.surname}`
    }
}

class Employee extends Person {
    constructor (name, surname, job, salary) {
        super (name, surname);
        this.job = job;
        this.salary = salary;
    }

    getData() {
        console.log(`${super.fullName()}'s salary is ${this.salary} euros`)
    }

    getSalary() {
        console.log(this.salary);
    }

    increaseSalary() {
        this.salary = this.salary * 1.1;
    }
}

class Developer extends Employee {
    constructor (name, surname, job, salary, specialization) {
        super (name, surname, job, salary);
        this.specialization = specialization;
    }

    getSpecialization() {
        console.log(`${super.name} specialization is ${this.specialization}`);
    }
}

class Manager extends Employee {
    constructor (name, surname, job, salary, department) {
        super (name, surname, job, salary);
        this.department = department;
    }

    getDepartment() {
        console.log(`${super.name} department is ${this.department}`);
    }

    changeDepartment(newDepartment) {
        this.department = newDepartment;
    }
}

var manager = new Manager ('Pera','Peric','PR','5000','Press Center');
// manager.changeDepartment('Interviews');
console.log(manager.department);

var employee = new Employee ('Ilija','Ilic','Manager','5000')
employee.getSalary();
employee.increaseSalary();
employee.getSalary();


