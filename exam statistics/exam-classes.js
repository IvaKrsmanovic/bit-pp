export class Subject {
    constructor (name) {
        this.name = name;
    }

    getSubjectName() {
        return `${this.name}`
    }
}

export class Student {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getStudentData () {
        return `${this.name} ${this.surname}`
    }
}

export class Exam {
    constructor (subject, student, grade) {
        this.subject = subject;
        this.student = student; 
        this.grade = grade;
    }

    getExamInfo () {
        return `${this.subject.name}, ${this.student.name} ${this.student.surname}`
    }

    hasPassed () {
        if (this.grade > 5) {
            return true;
        } else {
            return false;
        }
    }
}

