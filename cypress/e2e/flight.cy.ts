/// <reference types="Cypress" />

describe("here i write test",()=>{
    it("for checking the way selector",()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('[href="https://rahulshettyacademy.com/dropdownsPractise/"]').invoke('removeAttr','target').click()
        
    })
})