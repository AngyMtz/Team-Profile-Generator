const Employee = require("../lib/Employee") 

describe("Employee", () => {
    
    it("Can create Employee object", () => {
        
        const employee = new Employee();
        expect(typeof(employee)).toBe("object")
    });

    it("Can set name", () => {
        
        const name = "Pepe";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });
    
    it("Can set id", () => {
        
        const id = "7897";
        const employee = new Employee("Pepe", id);
        expect(employee.id).toBe(id);
    });
    
    it("Can set email", () => {
        
        const email = "Pepe@live.com";
        const employee =new Employee("Pepe", "7897", email);
        expect(employee.email).toBe(email);
    });

    describe("getName", () => {
     
        it("Can get name via getName()", () => {
      
            const name = "Robert";
            const employee = new Employee(name);  
            expect(employee.getName()).toBe(name);
        });
    });
    
    describe("getId", () => {
    
        it("Can get id via getId()", () => {
            
            const id = "8897";
            const employee = new Employee("Robert", id);  
            expect(employee.getId()).toBe(id);
        });
    });
    
    describe("getEmail", () => {
     
        it("Can get email via getEmail()", () => {
         
            const email = "RM@live.com";
            const employee = new Employee("Robert", "8897", email);
            expect(employee.getEmail()).toBe(email);
        });

    });
    
    describe("getRole", () => {
     
        it("getRole() should return Employee", () => {
        
            const role = "Employee";
            const employee = new Employee("Robert", "8897", "RM@live.com");
            expect(employee.getRole()).toBe(role);
        });
    });

});
