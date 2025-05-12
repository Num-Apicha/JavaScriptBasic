// Loop Array

const data = [10, 20, 30, 40, 50];

//for of
for (let num of data) {
  console.log(num);
}

//for
for (let i = 0; i < data.length; i++) {
  console.log(`No.${i + 1} = ${data[i]}`);
}

//foreach
data.forEach((element, index) => {
  console.log(`No.${index + 1} = ${element}`);
});
