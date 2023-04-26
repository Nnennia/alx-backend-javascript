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
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  yearsOfExperience: 7,
  //   contract: false,
};
console.log(teacher3);
