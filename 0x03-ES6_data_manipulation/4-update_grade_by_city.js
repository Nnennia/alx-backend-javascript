/* eslint-disable*/
export default function updateStudentGradeByCity(students, city, newGrades) {
    if (!Array.isArray(students) || !Array.isArray(newGrades)) {
        return [];
    }
    return students
        .filter((obj) => obj.location === city)
        .map((student) => {
            const grade = newGrades.find((grade) => student.id === grade.studentId);
            if (grade) {
                return { ...student, grade: grade.grade };
            }
            return { ...student, grade: 'N/A' };
        });
}
