// ค้นหาข้อมูลใน Array

const colors = ['red', 'green', 'blue', 'yellow', 'pink'];

// indexOf(ข้อมูล) => ผลการค้นหาจะได้ตําแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
colors.indexOf('red'); // 0
colors.indexOf('black'); // -1

// find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
colors.find((color) => color === 'red'); // 'red'
colors.find((color) => color === 'black'); // undefined

// findIndex(ข้อมูล) => ผลการค้นหาจะได้ตําแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
colors.findIndex((color) => color === 'red'); // 0
colors.findIndex((color) => color === 'black'); // -1

// filter(ข้อมูล) => ผลการค้นหาจะได้ Array ของข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ Array ว่าง
const filteredColors = colors.filter((color) => color === 'red'); // ['red']
const filteredColors2 = colors.filter((color) => color === 'black'); // []

// some(ข้อมูล) => ผลการค้นหาจะได้ true ถ้าค้นเจออย่างน้อย 1 ตัว ถ้าค้นไม่เจอจะได้ false
const someColors = colors.some((color) => color === 'red'); // true
const someColors2 = colors.some((color) => color === 'black'); // false

// every(ข้อมูล) => ผลการค้นหาจะได้ true ถ้าค้นเจอทุกตัว ถ้าค้นไม่เจอจะได้ false
const everyColors = colors.every((color) => color === 'red'); // false
const everyColors2 = colors.every((color) => color === 'black'); // false

// includes(ข้อมูล) => ผลการค้นหาจะได้ true ถ้าค้นเจออย่างน้อย 1 ตัว ถ้าค้นไม่เจอจะได้ false
const includesColors = colors.includes('red'); // true
const includesColors2 = colors.includes('black'); // false
