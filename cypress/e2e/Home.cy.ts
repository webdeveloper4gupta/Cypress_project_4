/// <reference types="Cypress" />

describe("Here i write all my test cases",()=>{
    it("first test case",()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        
    })

    var count=0;
    it("here i write the test cases for static seraching product according to index number and place order ",()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        // here i write the assertion 
        cy.get('.products').find('.product').should('have.length', 30) 
        // here i click the product according to array index 
        cy.get('.product').eq(2).contains('ADD TO CART').click()
        
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        cy.get('.chkAgree').click()
        cy.get('select').select('India')
        cy.contains('Proceed').click()
        
    })
   var length:number;
    it("third test case",()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
       var countofele=0;
        
      cy.get('.products').find('.product').then((value)=>{
                length=Cypress.$(value).length;                  
      })
     
    })
    it("second",()=>{
        cy.log(length.toString())
    })
    // here i write the code for clicking all the add to cart  button as the product is 30 so i click all the product , so definitely the total product is 30
    it("fourth test case",()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        for(let i=0;i<length;i++){
            cy.get('.product').eq(i).contains('ADD TO CART').click()
            
        }
        cy.get('.cart-icon > img').click()
        let i=length;
        cy.get('.cart-item').each(($el, index, $list)=>{
            if(i){
                cy.wrap($el).find('.product-remove').click({force:true});
               
                i--
            }       
        })
        cy.get('.cart-icon > img').click()
        // from here i check the plus is working correctly or not 
        cy.get('.stepper-input').each(($el,index,$list)=>{
            cy.wrap($el).find('.increment').click()
        })
        // from here i check the minus is working correctly or not 
        cy.get('.stepper-input').each(($el,index,$list)=>{
            cy.wrap($el).find('.decrement').click()
        })
        // here i write the code to check the value of count of item:
        cy.get('.product').eq(0).find('.stepper-input').find('.increment').click();
        cy.get('.stepper-input').eq(0).find('.quantity').should('have.value',2)
    })
    
    it("here i write the code for checking the items count",()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.product').eq(0).find('.stepper-input').find('.increment').click();
        cy.get('.product').eq(0).contains('ADD TO CART').click()
        cy.get('.product').eq(1).contains('ADD TO CART').click()
        count+=2;
        // here i write the asseration for checking the code for the 

        cy.get('.cart-info tr td:nth-child(2)').get('strong').eq(0).should('have.text',count)
    })

    // here i write the test for checking the price 
    let sum=0;
    it('here i write the test code for the checking the total price of items',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.product').eq(0).find('.stepper-input').find('.increment').click();
        cy.get('.product').eq(0).find('.stepper-input').find('.increment').click();
        cy.get('.product').eq(0).contains('ADD TO CART').click()
        
        // now here i write the code 
        cy.get('.product').eq(0).each(($el,index,$list)=>{
                let v=$el.text().split(" ")
                let res=v[3].match(/(\d+)/);
                cy.get(':nth-child(1) > .stepper-input > .quantity').invoke('val').then(val=>{
                    if(val && res)
                //   cy.log(val.toString())
                sum=Number(res[0])*Number(val);
                cy.get('.cart-info tr td:nth-child(2)').get('strong').eq(1).should('have.text',sum)
                })
                // cy.log(v[3])
                // if(res){
                //     sum=Number(res[0])+Number()
                // }
        })
    })
    // test for checking logo text 
    it("logo text",()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.brand').should('have.text','GREENKART')
    })
//    writing the test for promo code concept 
    it("coupon test",()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.product').eq(0).contains('ADD TO CART').click()
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get('.promoCode').type("000")
        cy.get('.promoBtn').click()
        cy.get('.promoInfo').should('have.text','Invalid code ..!')
        cy.get('.discountPerc').should('have.text',"0%")
    })
    // here i write the code for the tab changing concept 

    it("tab changing",()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.product').eq(0).contains('ADD TO CART').click()
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        cy.contains('Terms & Conditions').invoke('removeAttr', 'target').click()
        // here i write the assertion 
        cy.get('.wrapperTwo').should('have.text','Here the terms and condition page Click to geo back Home')
        cy.wait(12000)
        cy.contains('Home').click()
    })
    // here i write the code for the automation in the empty cart
    it("for empty cart",()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get('h2').should('have.text','You cart is empty!')
    });
    
})
