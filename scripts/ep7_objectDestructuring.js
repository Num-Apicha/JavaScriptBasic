//Destructuring assignment

//Array destructuring
const colorArr = ['red', 'green', 'blue', 'yellow', 'purple'];
const [red, green, blue, , purple] = colorArr;
console.log(red); // red
console.log(green); // green
console.log(blue); // blue
console.log(purple); // purple

//Object destructuring
const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  country: 'USA',
  showCountry: function (d) {
    console.log(person.country + '  ' + d);
  },
};
const { name: n, age: a, city: c, country: ct, showCountry: sct } = person;
console.log(n); // John
console.log(a); // 30
console.log(c); // New York
console.log(ct); // USA
sct('xxx'); // USA
