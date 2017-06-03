
import { InternetCustomer } from './internetCustomer';
import { Customer} from './customer';
import {DataProcessor} from'./arrowFunction';
import { HeavyWorker, HeavyWorker2} from'./withoutPromise';
//import { HeavyWorker as wrk1, HeavyWorker2 as wrk2} from'./withPromise'; works too!!, use * if multiple
import * as PromiseWorkers from'./withPromise';

//import { ValueAnalyzer } from './valueAnalyzer';
import { Order } from './order';

import './enhancedObjLiterals';
import './proxy';
/*let internetCustomer = new InternetCustomer(
    10, 'northwind', 'delhi', 1200, true, 'http://google.com' // create instance of internetcustomer
);

console.log(internetCustomer.format());
console.log(internetCustomer instanceof InternetCustomer);*/

let customerCsvString = '10, northwind, NCR, 234, true';
let anotherCustomer = Customer.createCustomer(customerCsvString); //creates instace of customer

anotherCustomer.addOrder( new Order(1, new Date(), 1200));
anotherCustomer.addOrder( new Order(2, new Date(), 1300));
anotherCustomer.addOrder( new Order(3, new Date(), 1000));
anotherCustomer.addOrder( new Order(4, new Date(), 1100));

console.info('Iterating orders...');
for(let order of anotherCustomer.getOrders()){
    console.log(order.toString());
}

    console.info('Iterating customer object directly');

    for (let order of anotherCustomer) {
        console.info(order.toString());
    }

console.log(JSON.stringify(anotherCustomer));

let dataProcessor = new DataProcessor();

let result = dataProcessor.process(
    (a,b) => a+b,
    function(a,b) {
        return a-b;
    },
    (a,b) => {
        console.log('Arrow function with block');
        return a*b;
    }
);
console.log(result());

let worker1 = new HeavyWorker();
let worker2 = new HeavyWorker2();

//multiple async ops, but sequentially
// // UI wait time is more in this case
// worker1.DoHeavyWork(10, (result) => {
//     console.log('worker1 completed' + JSON.stringify(result));


// worker2.DoHeavyWork(300, (result) => {
//     console.log('worker 2 completed' + JSON.stringify(result));
// });

// });

let workerWithPromise1 = new PromiseWorkers.HeavyWorker();
let workerWithPromise2 = new PromiseWorkers.HeavyWorker2();
let input = 200;

Promise.all([
   workerWithPromise1.process(input),
   workerWithPromise2.process(input)
]).then( // then is called after both promise return, it accepts 2 callbacks (one for success, one for failure)
    data => console.log('Both completed successfully' + JSON.stringify(data)),
    error => console.log('One of the worker failed' + JSON.stringify(error))
);

/*let analyzer = new ValueAnalyzer(1,2,3,4);
let result = analyzer.getValues();
console.log(result);*/