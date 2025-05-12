// Array reduce

const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const sum = data.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum); // 550

// Array reduce with object
const data2 = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Jim', age: 35 },
];
const sumAge = data2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.age;
}, 0);
console.log(sumAge); // 90

// Array reduce with initial value
const data3 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const sum2 = data3.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100); // initial value is 100
console.log(sum2); // 650
