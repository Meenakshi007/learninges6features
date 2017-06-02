import { InternetCustomer } from './internetCustomer';


let internetCustomer = new InternetCustomer(
    10, 'northwind', 'delhi', 1200, true, 'http://google.com' // create instance of internetcustomer
);

console.log(internetCustomer.format());
console.log(internetCustomer instanceof InternetCustomer);

let customerCsvString = '10, northwind, NCR, 234, true';
let anotherCustomer = InternetCustomer.createCustomer(customerCsvString); //creates instace of customer

console.log(anotherCustomer.format());