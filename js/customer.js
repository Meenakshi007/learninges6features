import { ObjectFormatter } from './formatutils';
import {Order} from './order';

const COL_SEPARATOR = ",";

const ORDERS_SYMBOL = Symbol('Orders Symbol');

class Customer {
    constructor(id, name, address, credit, status) {
        [this.id, this.name, this.address,
        this.credit, this.status] = arguments;

        this[ORDERS_SYMBOL] = [];
    }


    format() {
        let formattedMessage = ObjectFormatter.format(this).toUpperCase();
        return formattedMessage;
    }

    addOrder(order) {
        if(order) {
            this[ORDERS_SYMBOL].push(order);
        }
    }

    getOrders() {
        return this[ORDERS_SYMBOL];
    }

    *[Symbol.iterator]() {
        for(let order of this[ORDERS_SYMBOL]) {
            yield order;
        }
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