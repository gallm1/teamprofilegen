const Employee = require("../lib/Employee");


describe("Employee class", () => {

    describe("Initialization", () => {
        it("Should be an object of the Employee Class", () => {
            expect(typeof new Employee()).toBe("object");
        })
        
        it("Should have name, id, and email properties for the employee", () => {
            const name = "Michael";
            const id = 12345;
            const email = "email@test.com";
            const newEmployee = new Employee(name, id, email);
            
            expect(newEmployee.name).toEqual(name);
            expect(newEmployee.id).toEqual(id);
            expect(newEmployee.email).toEqual(email);
        })
    })

    describe("getName callback", () => {
        it("Should retrieve the value of the name property of the employee", () => {
            const name = "Michael";
            const id = 12345;
            const email = "email@test.com";
            const newEmployee = new Employee(name, id, email);

            expect(newEmployee.getName()).toBe(name);
        })
    })

    describe("getID callback", () => {
        it("Should retrieve the value of the id property for the employee", () => {
            const name = "Michael";
            const id = 12345;
            const email = "email@test.com";
            const newEmployee = new Employee(name, id, email);

            expect(newEmployee.getID()).toBe(id);
        })
    })

    describe("getEmail callback", () => {
        it("Should retrieve the value of the email property for the employee", () => {
            const name = "Michael";
            const id = 12345;
            const email = "email@test.com";
            const newEmployee = new Employee(name, id, email);

            expect(newEmployee.getEmail()).toBe(email);
        })
    })

    describe("getRole callback", () => {
        it("Should retrieve the employee role", () => {
            const name = "Michael";
            const id = 12345;
            const email = "email@test.com";
            const newEmployee = new Employee(name, id, email);

            expect(newEmployee.getRole()).toBe("Employee");
        })
    })
})
