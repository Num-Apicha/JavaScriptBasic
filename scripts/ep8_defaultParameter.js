//Default Parameters

getDataCustomer = (cusName, cusAddr = 'Trang') => {
  const addr = `Name : ${cusName}
    Address : ${cusAddr}`;
  return addr;
};

console.log(getDataCustomer('John Doe', '123 Main St'));
console.log(getDataCustomer('John Doe')); // Address : Trang
