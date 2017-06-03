import { ValueProvider } from './valueProvider';

class ValueAnalyzer extends ValueProvider {
    constructor() {
        super(...arguments);
    }

    getValues() {
        let originalValues = super.getValues();
        //let result = [];
        /*for(var val of originalValues) {
            result.push(val*val);
        }
        return result;*/
        return originalValues.map(item => item*item);
    }
}

export { ValueAnalyzer };