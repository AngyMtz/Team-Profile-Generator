const Employee = require("./Employee");

class Engineer extends Employee {
    
    //constructor contains the initial properties of the parent class(Employee) with the aditional property of github.
    constructor (name, id, email, github) {
        
        super (name, id, email);
        this.github = github;
    }
    
    //This method is returning the github of the engineer
    getGithub() {
        
        return this.github;
    }
    
    //This method is returning the role they have on the company
    getRole() {
        
        return "Engineer";
    }
}

//It's going to exposed the Engineer's information.
module.exports = Engineer;