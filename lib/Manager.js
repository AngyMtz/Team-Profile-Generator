const Employee = require("./Employee");

class Manager extends Employee {
    
    //constructor contains the initial properties of the parent class(Employee) with the aditional property of office number.
    constructor (name, id, email, officeNumber) {
        
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    
    //This method is returning the office number of the Manager
    getOfficeNumber() {
        
        return this.officeNumber;
    }
    
    //This method is returning the role they have on the company
    getRole() {
        
        return "Manager";
    }
}

//It's going to exposed the Manager's information.
module.exports = Manager;