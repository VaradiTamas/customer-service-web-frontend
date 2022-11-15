export class Ticket {
    id;
    number;
    serviceType;
    startTimeStamp;

    constructor(id, number, serviceType) {
        this.id = id;
        this.number = number;
        this.serviceType = serviceType;
    }
}
