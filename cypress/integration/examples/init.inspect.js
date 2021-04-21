
describe("check if the application can start up",()=>{
    it("Check if cypress works",()=>{
        expect(true).to.equal(true);
    })

    it("check if the web address loads",()=>{
       cy.visit("http://localhost:3000") 
    })
})