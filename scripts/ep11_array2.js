// splice & slice

// splice(ตำแหน่งที่จะลบ, จำนวนที่จะลบ): remove elements from an array and add new elements
const array = [1, 2, 3, 4, 5];
array.splice(2, 3); // Remove 3 element at index 2
console.log(array); // Output: [1, 2]

// splice(ตำแหน่งที่จะลบ, จำนวนที่จะลบ, ค่าใหม่): remove elements from an array and add new elements
array = [1, 2, 3, 4, 5];
array.splice(2, 3, 6, 7, 8); // Remove 3 element at index 2 and add 6, 7, 8
console.log(array); // Output: [1, 2, 6, 7, 8]

// slice(ตำแหน่งเริ่มต้น, ตำแหน่งสุดท้าย - 1): create a shallow copy of a portion of an array
const array2 = [1, 2, 3, 4, 5];
const newArray = array2.slice(2, 4); // Copy element at index 2 and 3
console.log(newArray); // Output: [3, 4]

// slice(ตำแหน่งเริ่มต้น): create a shallow copy of a portion of an array
const array3 = [1, 2, 3, 4, 5];
const newArray2 = array3.slice(2); // Copy element at index 2 to the end
console.log(newArray2); // Output: [3, 4, 5]
