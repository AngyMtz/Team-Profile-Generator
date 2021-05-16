const Engineer = require("../lib/Engineer");

describe("Github account", () => {
  
    it("Can set Github account", () => {
      
      const github = "GitHubUser";
      const employee = new Engineer("BabyHector", "1111", "BH@live.com", github);
      expect(employee.github).toBe(github);
    });
});

describe("getRole", () => {
  
    it("Can get role via getRole()", () => {

      const role = "Engineer";
      const employee = new Engineer("BabyHector", "1111", "BH@live.com", "GithubUser");
      expect(employee.getRole()).toBe(role);
    });
});

describe("getGithub", () => {
  
  it("Can get github username via getGithub()", () => {
    
    const github = "GitHubUser";
    const employee = new Engineer("BabyHector", "1111", "BH@live.com", github);
    expect(employee.getGithub()).toBe(github);
    });
});