//Array Filter
// const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const filterData = data.filter((e) => e > 50);
// console.log(filterData); // [60, 70, 80, 90, 100]

const employees = [
  { name: 'John', age: 25, salary: 50000, department: 'HR' },
  { name: 'Jane', age: 30, salary: 60000, department: 'IT' },
  { name: 'Bob', age: 35, salary: 70000, department: 'Finance' },
  { name: 'Alice', age: 28, salary: 55000, department: 'HR' },
  { name: 'Tom', age: 40, salary: 80000, department: 'IT' },
  { name: 'Sara', age: 32, salary: 75000, department: 'Finance' },
  { name: 'Mike', age: 45, salary: 90000, department: 'HR' },
  { name: 'Emma', age: 29, salary: 65000, department: 'IT' },
  { name: 'David', age: 38, salary: 85000, department: 'Finance' },
  { name: 'Sophia', age: 31, salary: 70000, department: 'HR' },
];

const filterEmployees = employees.filter(
  (e) => e.salary > 60000 && e.department === 'IT'
);

console.log(filterEmployees);
