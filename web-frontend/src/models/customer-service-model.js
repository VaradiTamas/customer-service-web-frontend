export class CustomerService {
    id;
    name;
    serviceTypes;
    employees;
    admins;

    constructor(id, name, serviceTypes, employees, admins) {
        this.id = id;
        this.name = name;
        this.serviceTypes = serviceTypes;
        this.employees = employees;
        this.admins = admins;
    }
}
