export class Owner {
    id;
    email;
    password;
    customerServices;

    constructor(id, email, password, customerServices) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.customerServices = customerServices;
    }
}
