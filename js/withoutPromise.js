const DEFAULT_TIMEOUT = 300;
class HeavyWorker {
    DoHeavyWork(input, callback) {
        setTimeout(() => {
            let status = 'FAILED';

            if(input >= 100) {
                status = 'SUCCESS';
            }

            if(typeof callback === 'function') {
                callback ({
                    status
                });
            }
        }, DEFAULT_TIMEOUT);
                    
    }
}

class HeavyWorker2 {
    DoHeavyWork(input, callback) {
        setTimeout(() => {
            let status = 'FAILED';

            if(input >= 200) {
                status = 'SUCCESS';
            }

            if(typeof callback === 'function') {
                callback ({
                    status
                });
            }
        }, DEFAULT_TIMEOUT);
                    
    }
}

export { HeavyWorker, HeavyWorker2};