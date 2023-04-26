interface Student {
  firstname: string;
  lastname: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
  firstname: "John",
  lastname: "Doe",
  age: 20,
  location: "London",
};

const secondStudent: Student = {
  firstname: "Jane",
  lastname: "Doe",
  age: 30,
  location: "Paris",
};

const studentsList: Array<Student> = [firstStudent, secondStudent];
export const createTable = (studentsList: Array<Student>): void => {
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  table.insertAdjacentElement("beforeend", headerRow);

  headerRow.insertAdjacentHTML("beforeend", "<th>FirstName</th>");
  headerRow.insertAdjacentHTML("beforeend", "<th>Location</th>");

  for (const student of studentsList) {
    const studentRow = document.createElement("tr");
    studentRow.insertAdjacentHTML("beforeend", `<td>${student.firstname}</td>`);
    studentRow.insertAdjacentHTML("beforeend", `<td>${student.location}</td>`);
    table.insertAdjacentElement("beforeend", studentRow);
  }

  document.body.insertAdjacentElement("beforeend", table);
};

createTable(studentsList);
