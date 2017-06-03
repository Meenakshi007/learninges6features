function processOrder(order) {
    console.log('order processing started');
    console.log('order data:' + JSON.stringify(order));

    if(order.amount >=1000) {
        console.log('order status: Proccessed');
    } else {
        console.log('order status: ON HOLd');
    }

    return true;
}

function doWork(orderId) {
    let order = {
        id: orderId,
        date: new Date(),
        amount: 2300
    };

    processOrder(order);
}

Array.prototype.isExist = function(item) {
    let status = false;

    if(item) {
        for(let index in this) {
            if(this[index]=== item) {
                status = true;
                break;
            }
        }
    }
    return status;
}

 processOrder = new Proxy(processOrder, { // proxying the function call
    apply: function (target, currentHandler, args) { // target = original funct, currentHandler = for proxying object
        let alreadyProcessedOrder = ['ORD1001', 'ORD1002', 'ORD1003'];

        console.log('proxying started');

        let orderId = args[0].id;

        if(alreadyProcessedOrder.isExist(orderId)) {
            console.log('order process already completed');
            console.log(currentHandler.getPrototypeOf());
            return true;
        }  else {
            console.log('order process was not completed');

            let status = target(...args);

            return status;
        }
    }
})

doWork('ORD1001');