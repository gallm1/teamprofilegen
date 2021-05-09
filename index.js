const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employees = [];
const createHTML = require("./lib/createHTML")


// questions array for inquirer package
const managerInfo = [
    {
        type: "input",
        name: "nameManager",
        message: "Provide the manager's name:"
    },
    {
        type: "input",
        name: "managerId",
        message: "Provide the manager's ID number:"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Provide the manager's email address:"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Provide the manager's office phone number:"
    },
    {
        type: "list",
        name: "employeeRole",
        message:  "Enter next employee by selecting role:",
        choices: ["Engineer", "Intern", "None"]
    }
];

const internInfo = [
    {
        type: "input",
        name: "nameIntern",
        message: "Provide the intern's name:"
    },
    {
        type: "input",
        name: "internId",
        message: "Provide the intern's ID number:"
    },
    {
        type: "input",
        name: "internEmail",
        message: "Provide the intern's email address:"
    },
    {
        type: "input",
        name: "school",
        message: "Provide the interns school/university:"
    },
    {
        type: "list",
        name: "employeeRole",
        message:  "Enter next employee by selecting role:",
        choices: ["Engineer", "Intern", "None"]
    }
];

const engineerInfo = [
    {
        type: "input",
        name: "nameEngineer",
        message: "Provide the engineer's name:"
    },
    {
        type: "input",
        name: "engineerId",
        message: "Provide the engineer's ID number:"
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "Provide the engineer's email address:"
    },
    {
        type: "input",
        name: "github",
        message: "Provide the engineer's GitHub profile name:"
    },
    {
        type: "list",
        name: "employeeRole",
        message:  "Enter next employee by selecting role:",
        choices: ["Engineer", "Intern", "None"]
    }
];


// Function to create html file
const createFile = (fileName, htmlCode) => {
    console.log("Creating HTML file for team...");
    fs.writeFile(fileName, htmlCode, (err) => 
        err ? console.error(err) : console.log("File created!"));

}





// add function for asking the questions
const inquirerQuestions = (questions) => {
    inquirer.prompt(questions)
    .then((answers) => {
        if (employees.length === 0) {
            const manager = new Manager(answers.nameManager, answers.managerId, answers.managerEmail, answers.officeNum);
            employees.push(manager);
        } else {
            if(answers.github) {
                const engineer = new Engineer(answers.nameEngineer, answers.engineerId, answers.engineerEmail, answers.github);
                employees.push(engineer);
            } else if (answers.school) {
                const intern = new Intern(answers.nameIntern, answers.internId, answers.internEmail, answers.school);
                employees.push(intern);
            }
        }

        if (answers.employeeRole === "Engineer") {
            inquirerQuestions(engineerInfo);
        } else if (answers.employeeRole === "Intern") {
            inquirerQuestions(internInfo);
        } else {
            createFile("./dist/team.html", createHTML(employees));
        }
    })
    .catch(error => {
        if(error.isError) {
            console.log("Use a different terminal to use this program.");
        } else {
            console.log("An error occurred. Send an email to email@test.com to get help.");
        }  
    });
}


// create init function
const init = () => console.log("Build out your team:\n");

// Add function calls to start app
init();
inquirerQuestions(managerInfo);