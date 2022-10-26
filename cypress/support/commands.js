Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Renato')
    cy.get('#lastName').type('Lobo')
    cy.get('#email').type('renatolobo_@hotmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})