import { ObjectFormatter } from './formatutils';
const COL_SEPARATOR = ",";
class Customer {
    constructor(id, name, address, credit, status) {
        [this.id, this.name, this.address,
        this.credit, this.status] = arguments;
    }


    format() {
        let formattedMessage = ObjectFormatter.format(this).toUpperCase();
        return formattedMessage;
    }

    static createCustomer(csvString) {
        let customer = null;
        if (csvString) {
            let SplittedCsvString = csvString.split(COL_SEPARATOR);
            customer = new Customer(...SplittedCsvString);
        }
        return customer;
    }
}

export { Customer };