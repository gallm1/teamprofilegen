const Manager = require("../lib/Manager");

describe("Manager class", () => {

    describe("Initialization", () => {
        it("Should be an object of the Manager Class", () => {
            expect(typeof new Manager()).toBe("object");
        })
        
        it("Should have name, id, email, and officeNumber properties for the manager", () => {
            const name = "Michael";
            const id = 12345;
            const email = "email@test.com";
            const officeNumber = "555-5555";
            const newManager = new Manager(name, id, email, officeNumber);
            
            expect(newManager.name).toEqual(name);
            expect(newManager.id).toEqual(id);
            expect(newManager.email).toEqual(email);
            expect(newManager.officeNumber).toEqual(officeNumber);
        })
    })

    describe("getOfficeNumber callback", () => {
        it("Should retrieve the office phone number for the manager", () => {
            const name = "Michael";
            const id = 12345;
            const email = "email@test.com";
            const officeNumber = "555-5555";
            const newManager = new Manager(name, id, email, officeNumber);

            expect(newManager.getOfficeNumber()).toBe(officeNumber);
        })
    })

    describe("getRole callback", () => {
        it("Should retrieve the Manager role", () => {
            const name = "Michael";
            const id = 12345;
            const email = "email@test.com";
            const officeNumber = "555-5555";
            const newManager = new Manager(name, id, email, officeNumber);

            expect(newManager.getRole()).toBe("Manager");
        })
    })
})