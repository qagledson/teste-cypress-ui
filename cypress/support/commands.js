// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (usuario, senha) => { 
        cy.get('#username').type(usuario)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
})

Cypress.Commands.add('preCadastro', (email, senha, nome, sobrenome) =>{
    cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get('input[name="register"]').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)

        cy.get('.woocommerce-Button').click()
})

Cypress.Commands.add('addProdutos', (produto, quantidade) => {
    cy.get('[class="product-block grid"]').contains(produto).click()
        //- Selecionar tamanho
        cy.get('ul li[data-value="XS"]').click()
         //- Selecionar cor
        cy.get('ul li[data-value="Blue"]').click()
         //- Selecionar quantidade
        cy.get('input[name="quantity"]').clear().type(quantidade)
        //- Selecionar quantidade
        cy.get('.single_add_to_cart_button').click()
})