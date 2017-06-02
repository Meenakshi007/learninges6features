import { Customer } from './customer';
import { ObjectFormatter } from './formatutils';
class InternetCustomer extends Customer {
    constructor(id, name, address, credir, status, blogUrl) {
        super(...arguments);
        this.blogUrl = blogUrl;
    }

    format() {
        let formattedMessage = ObjectFormatter.format(this).toLowerCase();
        return formattedMessage;
    }
}

export { InternetCustomer };