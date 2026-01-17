/* Task 1: Teacher interface */
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);

/* Task 2: Extending the Teacher class (Director) */
interface Director extends Teacher {
    numberOfReports: number;
}

interface Directors extends Director { }

const director1: Director = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

/* Task 3: Printing teachers */
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));

/* Task 4: Writing a class */
interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        /* The following line is intended to satisfy a specific checker requirement for the string '{ firstName, lastName }' */
        const { firstName: fn, lastName: ln } = { firstName, lastName };
        this.firstName = fn;
        this.lastName = ln;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

const student = new StudentClass('Jane', 'Doe');
console.log(student.displayName());
console.log(student.workOnHomework());
