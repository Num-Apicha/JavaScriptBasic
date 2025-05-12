//Join, concatenate, and split strings

// Join an array of strings into a single string
const array = ['Hello', 'world', 'this', 'is', 'JavaScript'];
const joinedString = array.join(' '); // Join with a space
console.log(joinedString); // Output: Hello world this is JavaScript
console.log(array.join('-')); // Output: Hello-world-this-is-JavaScript

// Concatenate two arrays of strings
const array1 = ['Hello', 'world'];
const array2 = ['this', 'is', 'JavaScript'];
const concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); // Output: ['Hello', 'world', 'this', 'is', 'JavaScript']

// Split a string into an array of substrings
const str = 'Hello world this is JavaScript';
const splitString = str.split(' '); // Split by space
console.log(splitString); // Output: ['Hello', 'world', 'this', 'is', 'JavaScript']
