const Intern = require("../lib/Intern");

describe("Intern class", () => {

    describe("Initialization", () => {
        it("Should be an object of the Intern Class", () => {
            expect(typeof new Intern()).toBe("object");
        })
        
        it("Should have name, id, email, and school properties for the intern", () => {
            const name = "Michael";
            const id = 12345;
            const email = "email@test.com";
            const school = "University of Michigan";
            const newIntern = new Intern(name, id, email, school);
            
            expect(newIntern.name).toEqual(name);
            expect(newIntern.id).toEqual(id);
            expect(newIntern.email).toEqual(email);
            expect(newIntern.school).toEqual(school);
        })
    })

    describe("getSchool callback", () => {
        it("Should retrieve the school/university that the intern goes to", () => {
            const name = "Michael";
            const id = 12345;
            const email = "email@test.com";
            const school = "University of Michigan";
            const newIntern = new Intern(name, id, email, school);

            expect(newIntern.getSchool()).toBe(school);
        })
    })

    describe("getRole callback", () => {
        it("Should retrieve the intern role", () => {
            const name = "Michael";
            const id = 12345;
            const email = "email@test.com";
            const school = "University of Michigan";
            const newIntern = new Intern(name, id, email, school);

            expect(newIntern.getRole()).toBe("Intern");
        })
    })
})
