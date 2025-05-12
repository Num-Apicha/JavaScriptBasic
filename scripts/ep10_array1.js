// push, pop, shift, unshift

// 1. Create an array of numbers from 1 to 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2. Use push to add a number to the end of the array
numbers.push(...[11, 12]);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// 3. Use pop to remove the last number from the array
numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// 4. Use shift to remove the first number from the array
numbers.shift();
console.log(numbers); // Output: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// 5. Use unshift to add a number to the beginning of the array
numbers.unshift(999);
console.log(numbers); // Output: [999, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
