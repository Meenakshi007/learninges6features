import { ObjectFormatter } from './formatutils';
class Order {
    constructor(orderId, orderDate, amount) {
        [ this.orderId, this.orderDate, this.amount] = arguments;
    }

    toString() {
        return ObjectFormatter.format(this);
    }
}

export { Order };