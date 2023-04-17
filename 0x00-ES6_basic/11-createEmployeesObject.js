export default function createEmployeesObject(departmentName, employees) {
  const info = { [`${departmentName}`]: employees };
  return info;
}
