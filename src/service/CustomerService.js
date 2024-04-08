import http from './http-common'

class CustomerService {
    getAllCustomers() {
        return http.get("customers");
    }
    addCustomer(newCustomer){
        return http.post("customer",newCustomer);
    }
    deleteCustomerById(id){
        return http.delete("customer/"+id);
    }
    updateCutomer(updatedCustomer){
        return http.put("customer",updatedCustomer);
    }

}
export default new CustomerService();