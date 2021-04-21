import countryNewsStore from "../../../src/Store"
describe("testing news detail  and comment component", ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/details/0")

    }
    )


    it("check if news title is loaded",()=>{
        cy.get('h2').should('not.be.empty')
      })

    it("check if news details profile is loaded", ()=>{
      cy.get('p').should('not.be.empty')})

    it("check if news details content is loaded", ()=>{
        cy.get('span').should('not.be.empty')})  

   it("check if news details url is loaded", ()=>{
            cy.get('a').should('not.be.empty')})

})
