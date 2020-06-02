import { HTTP } from './baseService';

class CustomerService {

    getCustomers(){
        return HTTP.get('/customers');
    }
}

const customerService = new CustomerService();
export default customerService;