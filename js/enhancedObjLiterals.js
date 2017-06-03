let [id, name] = [10, 'Gaurav'];
let licenseKey = 'LIC6657';
class Customer {
    format() {
        return this.id + ',' + this.name;
    }
}

let customer = {
    id,
    name,
    [`_Prop${licenseKey}`]: 100, // dynamic property
    work() {
        return 'success';
    },
    __proto__ : new Customer() // proto represents the class which it instantiates, from now customer is instance of "Customer" class
};

console.log(customer instanceof Customer);
console.log(customer.format()); // now can call functions od Csustomer class
console.log(customer.work());
console.log(customer._PropLIC6657);