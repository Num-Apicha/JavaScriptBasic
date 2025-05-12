//Object

const username = 'Little Booh';
const age = 33;
const address = `37 ถ.นวมินทร์ 42 
แขวงคลองกุ่ม 
เขตบึงกุ่ม 
กรุงเทพฯ 
10240`;

const customer = {
  customerName: username,
  age,
  address,
  showData() {
    console.log(this.customerName);
  },
};
customer.showData();
