const Intern = require("../lib/Intern");

describe("getSchool", () => { 
    
    it("Can set school via constructor", () => {
        
        const school  = "ITT";
        const employee = new Intern("Martha", "2222", "MS@live.com", school);
        expect(employee.school).toBe(school);
    });
});

describe("getSchool", () => { 
    
    it("getRole() should return Intern", () => {
        
        const role  = "Intern";
        const employee = new Intern("Martha", "2222", "MS@live.com", "ITT");
        expect(employee.getRole()).toBe(role);
    });
});

describe("getSchool", () => { 
    
    it("Can get school via getSchool()", () => {
        
        const school = "ITT";
        const employee = new Intern("Martha", "2222", "MS@live.com", school );
        expect(employee.getSchool()).toBe(school);
    });
});