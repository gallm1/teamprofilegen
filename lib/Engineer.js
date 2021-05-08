// pulls in Employee code
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return "Engineer";
    }

    getGithub () {
        return this.github;
    }

}

// exports Engineer code for reuse
module.exports = Engineer;