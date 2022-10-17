// Write your solution in this file!
// const employees = {
//   employee1: {
//     name: "1",
//     adress: "1-adress",
//   },
//   employee2: {
//     name: "2",
//     adress: "2-adress",
//   },
//   employee3: {
//     name: "3",
//     adress: "3-adress",
//   },
//   employee4: {
//     name: "4",
//     adress: "4-adress",
//   },
//   employee5: {
//     name: "5",
//     adress: "5-adress",
//   },
//   employee6: {
//     name: "6",
//     adress: "6-adress",
//   },
// };

const employee = { name: "Sam", streetAddress: "15 Broadway" };

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee };

  newEmployee[key] = value;
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };

  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
