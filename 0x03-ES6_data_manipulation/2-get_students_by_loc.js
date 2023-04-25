/*eslint-disable*/
export default function getStudentsByLocation(students, city) {
    const getStudent = students.filter((obj) => obj.location === city);
    return getStudent;
}
