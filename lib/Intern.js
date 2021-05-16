const Employee = require("./Employee");

class Intern extends Employee {
    
    //constructor contains the initial properties of the parent class(Employee) with the aditional property of school.
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    
    //This method is returning the school name of the intern
    getSchool() {
        
        return this.school;
    }
    
    //This method is returning the role they have on the company
    getRole() {
        
        return "Intern";
    }
}

//It's going to exposed the Intern's information.
module.exports = Intern;