/// <reference types="Cypress" />

describe("Here I write all my test cases",()=>{
    
    it("for checking in the pagination",()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        // here i change the concept of the tab changing
        cy.get('[href="#/offers"]').invoke('removeAttr','target').click()
        cy.get(':nth-child(4) > a').click()
        cy.get(':nth-child(1) > a').click()
        cy.get(':nth-child(5) > a').click().should('have.focus')
        cy.get(':nth-child(6) > a').click()
        cy.get(':nth-child(2) > a').click()
        cy.get(':nth-child(7) > a').click()
        
    })
    it("for checking page size",()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('[href="#/offers"]').invoke('removeAttr','target').click()
        let a="20";
        var count=0;
        var t;
        cy.get('#page-menu').select(a);
        // now here i want to check the length of the array
        cy.get('.table tbody tr').then((value)=>{
            t=Cypress.$(value).length;   
            if(t){
                try{

                    expect(t.toString()).to.be.equal(a)
                    cy.log("assertition passed") 
                }
                catch(e){
                    cy.log("error comes")
                }                  
            }
  })
    })
     it("test code for logo",()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        // here i change the concept of the tab changing
        cy.get('[href="#/offers"]').invoke('removeAttr','target').click()
        cy.get('.container > :nth-child(1) > .brand').should('have.text','GREENKART')
     })
     it("test case for the search box",()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        // here i change the concept of the tab changing
        cy.get('[href="#/offers"]').invoke('removeAttr','target').click()
        cy.get('#search-field').type('Tomato')
        let t;
        let k;
        cy.get('.table tbody tr').then((value)=>{
            cy.log("welcom")
            t=Cypress.$(value).length; 
            k=Cypress.$(value).text();
            
            if(t && k!='No data'){
                try{
                    expect(t).to.be.equal(1)
                    cy.log("assertition passed") 
                }
                catch(e){
                    cy.log("error comes")
                }                  
            }
            else{
                cy.log("Item is not present in the table")
            }
  })

     })
})