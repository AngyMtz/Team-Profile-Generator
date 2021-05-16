const Manager = require("../lib/Manager");

describe("office number", () => {
    
    it("Can set office number", () => {
        
        const officeNumber = "0007";
        const employee = new Manager("Norma", "7777", "NM@live.com", officeNumber);
        expect(employee.officeNumber).toBe(officeNumber);
    });
});

describe("getRole", () => {
    
    it("getRole() should return Manager", () => {
        
        const role = "Manager";
        const employee = new Manager("Norma", "7777", "NM@live.com", "0007");
        expect(employee.getRole()).toBe(role);
    });
});

describe("office number", () => {
    
    it("Can get office number via getOffice()", () => {
        
        const officeNumber = "0007";
        const employee = new Manager("Norma", "7777", "NM@live.com", officeNumber);
        expect(employee.getOfficeNumber()).toBe(officeNumber);
    });
});
