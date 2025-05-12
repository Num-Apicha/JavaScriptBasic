// Array Map

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2); // [2, 4, 6, 8, 10]
const squaredNumbers = numbers.map((number) => number ** 2); // [1, 4, 9, 16, 25]
const cubedNumbers = numbers.map((number) => number ** 3); // [1, 8, 27, 64, 125]
const incrementedNumbers = numbers.map((number) => number + 1); // [2, 3, 4, 5, 6]
const decrementedNumbers = numbers.map((number) => number - 1); // [0, 1, 2, 3, 4]
const halvedNumbers = numbers.map((number) => number / 2); // [0.5, 1, 1.5, 2, 2.5]
const multipliedNumbers = numbers.map((number) => number * 10); // [10, 20, 30, 40, 50]
const dividedNumbers = numbers.map((number) => number / 10); // [0.1, 0.2, 0.3, 0.4, 0.5]

const data = [
  { day: '01/06/2568', weather: 'Sunny', temperature: 30 },
  { day: '02/06/2568', weather: 'Rainy', temperature: 25 },
  { day: '03/06/2568', weather: 'Cloudy', temperature: 28 },
  { day: '04/06/2568', weather: 'Sunny', temperature: 32 },
  { day: '05/06/2568', weather: 'Rainy', temperature: 26 },
  { day: '06/06/2568', weather: 'Cloudy', temperature: 29 },
  { day: '07/06/2568', weather: 'Sunny', temperature: 31 },
  { day: '08/06/2568', weather: 'Rainy', temperature: 24 },
  { day: '09/06/2568', weather: 'Cloudy', temperature: 27 },
  { day: '10/06/2568', weather: 'Sunny', temperature: 33 },
];

let lstWeather = data.map((e) => e.weather);
