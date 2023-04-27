interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  location: string;
  yearsOfExperience: number;
  fullTimeEmployee: boolean;
}

interface Directors extends Teacher {
  numberOfReport: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
function printTeacher(firstName: string, lastName: string) {
  return `${firstName[0]}.${lastName}}`;
}

export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements IStudentClass {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this._firstName;
  }
}

const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  yearsOfExperience: 7,
  //   contract: false,
};
console.log(teacher3);
