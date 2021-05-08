const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require(".lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const employees = [];

function initApp() {
    startHtml();
    addMember();
}

function