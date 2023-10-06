/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

context('Funcionaldade de login', () => {
    //Hooks beforeEach - é executado antes de cada teste
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    //Hooks beforeEach - é executado antes de cada teste
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve efetuar login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it('Deve efetuar login com sucesso usando arquivo de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it.only('Deve efetuar login com sucesso usando fixtures', () => {
        cy.fixture('perfil.json').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
    
            cy.get('.page-title').should('contain', 'Minha conta')
        })

    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('alu_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
        
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('te@teste.com')
        cy.get('.woocommerce-form > .button').click()
        


        cy.get('.woocommerce-error').should('contain', 'a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta')
    })
})