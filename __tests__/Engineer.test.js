const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {

    describe("Initialization", () => {
        it("Should be an object of the Engineer Class", () => {
            expect(typeof new Engineer()).toBe("object");
        })
        
        it("Should have name, id, email, and github properties for the engineer", () => {
            const name = "Michael";
            const id = 12345;
            const email = "email@test.com";
            const github = "gallm1";
            const newEngineer = new Engineer(name, id, email, github);
            
            expect(newEngineer.name).toEqual(name);
            expect(newEngineer.id).toEqual(id);
            expect(newEngineer.email).toEqual(email);
            expect(newEngineer.github).toEqual(github);
        })
    })

    describe("getGithub callback", () => {
        it("Should retrieve the github profile name for the engineer", () => {
            const name = "Michael";
            const id = 12345;
            const email = "email@test.com";
            const github= "gallm1"
            const newEngineer = new Engineer(name, id, email, github);

            expect(newEngineer.getGithub()).toBe(github);
        })
    })

    describe("getRole callback", () => {
        it("Should retrieve the engineer role", () => {
            const name = "Michael";
            const id = 12345;
            const email = "email@test.com";
            const github = "gallm1";
            const newEngineer = new Engineer(name, id, email, github);

            expect(newEngineer.getRole()).toBe("Engineer");
        })
    })
})
