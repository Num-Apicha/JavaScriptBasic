//Spread Operator

const newArr = [100, 200, 300];
const data = [1, 2, 3, ...newArr, 4, 5, 6];
const data2 = [9, 10, 11];
data.push(...data2);
console.log(data); // [1, 2, 3, 100, 200, 300, 4, 5, 6]
