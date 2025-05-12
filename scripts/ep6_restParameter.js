//Rest Parameters
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
summation = (...numberArr) => {
  let total = 0;
  for (let number of numberArr) {
    total += number;
  }
  return total;
};

console.log(summation(50, 100, 950).toFixed(2));
console.log(summation(50, 100, 950, 1000, 2000, 3000));
