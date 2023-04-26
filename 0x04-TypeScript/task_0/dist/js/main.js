var firstStudent = {
    firstname: "John",
    lastname: "Doe",
    age: 20,
    location: "London",
};
var secondStudent = {
    firstname: "Jane",
    lastname: "Doe",
    age: 30,
    location: "Paris",
};
var studentsList = [firstStudent, secondStudent];
export var createTable = function (studentsList) {
    var table = document.createElement("table");
    var headerRow = document.createElement("tr");
    table.insertAdjacentElement("beforeend", headerRow);
    headerRow.insertAdjacentHTML("beforeend", "<th>FirstName</th>");
    headerRow.insertAdjacentHTML("beforeend", "<th>Location</th>");
    for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
        var student = studentsList_1[_i];
        var studentRow = document.createElement("tr");
        studentRow.insertAdjacentHTML("beforeend", "<td>" + student.firstname + "</td>");
        studentRow.insertAdjacentHTML("beforeend", "<td>" + student.location + "</td>");
        table.insertAdjacentElement("beforeend", studentRow);
    }
    document.body.insertAdjacentElement("beforeend", table);
};
createTable(studentsList);
//# sourceMappingURL=main.js.map