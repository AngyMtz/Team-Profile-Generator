//This is the class that creates the object employee
class Employee {
    
    //constructor contains the initial properties of the Employee class.
    constructor (name, id, email) {
        
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //This method is returning the name of the employee
    getName() {
        
        return this.name;
    }
    
    //This method is returning the Id of the employee
    getId() {
        
        return this.id;
    }
    
    //This method is returning the email of the employee
    getEmail() {
        
        return this.email;
    }
    
    //This method is returning the role they have on the company
    getRole() {
        
        return "Employee";
    }
}

//It's going to exposed the Employee information.
module.exports = Employee;