describe("Check if newsheadline loads",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/")

    }
    )
    it("check if rows in news headline have headline class ",()=>{
        cy.get("div").should("have.class", "news_headline")
    })
    it("check if it has a div with a class",()=>{
        cy.get("div").find("div").should("have.class", "news_basic")

    })
    it("check if it has a div with a class",()=>{
        cy.get("div").find("div").should("have.class", "article_profile")

    })
   

    it("check if the detail link has the right href param",()=>{
    cy.get("div>a").each(($a,$b) => {
        const message = $a.text();
    const url =`details/${$b}`;
        expect($a, message).to.have.attr("href").contain(url);
      });

    })  

    it("check if the refresh label is ok",()=>{
        cy.get('div').find('button').should('have.text', 'Refresh')

    })
    it("check if the refresh label is working",()=>{
        cy.get('div').find('button').click()

    })
it("check if api respondes appropriately",()=>{
    const baseUrl = "https://newsapi.org/v2/top-headlines?country=ng&apiKey=cad9015fba4e455ead21f54b6de73761";
			
    cy.request(`${baseUrl}`).then((response) => {
        expect(response.body).to.have.property('status', 'ok')
        expect(response.body).to.have.property('totalResults')
        expect(response.body).to.have.property('articles')
     
    })

})
    
})