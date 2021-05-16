const inquirer = require ("inquirer");
       
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const {engineerboard, internboard, managerboard, mainHTML} = require("./src/generateHTML");

const employeesArray = [];

function startHtml(){
  const Htmlfile = mainHTML(employeesArray.join(""))
  fs.writeFile("./dist/index.html", Htmlfile, err => err ? console.log(err) : console.log('success'));
};

function addEmployee() {
    inquirer.prompt([{
      type: "list",
      message: "Please choose the Employee Role you would like to fill:",
      choices: [
        "Manager",
        "Engineer",
        "Intern"
      ],
      name: "role"
    }])

    .then(({role}) => {
        let roleInfo = "";
        
        if (role === "Manager") {
            roleInfo = "office number";
        }
        else if (role === "Engineer") {
            roleInfo = "Github username";
        } 
        else if (role === "Intern") {
            roleInfo = "school name";
        }
    
        inquirer.prompt([{
            type: "input",
            message: `Please enter the Employees's ${roleInfo}`,
            name: "roleInfo"
        },
    {
      type: "input",
      message: "Please Enter the Employee's Name",
      name: "name"
    },
    {
      type: "input",
      message: "Please enter the Employee's ID",
      name: "id"
    },
    {
      type:"input",
      message: "Please enter the Employee's E-mail Address",
      name: "email"
    },
    {
        type: "list",
        message: "Do you wish to add another Employee?",
        choices: [
            "YES",
            "NO"
        ],
        name: "moreEmployee"
    }])

    .then((response) => {
        console.log(response)
        console.log(role)

        let employee;
        let board;
        if (role === "Manager") {
            
            employee = new Manager (response.name, response.id, response.email, response.roleInfo)
            board = managerboard(employee);
        }
        else if (role === "Engineer") {
            
            employee = new Engineer (response.name, response.id, response.email, response.roleInfo)
            board = engineerboard(employee);
        } 
        else if (role === "Intern") {
            
            employee = new Intern (response.name, response.id, response.email, response.roleInfo)
            board = internboard(employee);
        }


        employeesArray.push(board)

            if (response.moreEmployee === "YES") {
                addEmployee();
            } 
            else {
                startHtml();
            }
        });
    
    })
}

addEmployee();