describe("Conjunto de pruebas",() => {

    it("Validar pagina de inicio", () => {
        
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get('.orangehrm-login-branding > img').should("be.visible")
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label').should("be.visible")
        cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').contains("OrangeHRM OS 5.6.1")
        cy.get('.oxd-button').should("be.visible")
    


    })




})