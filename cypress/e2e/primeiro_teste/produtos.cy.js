/// <reference types="cypress"/>
//var faker = require('faker')
import { faker } from '@faker-js/faker';

describe('Funcionalidade Página de Produtos', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
        //- clica no primeiro item da lista
        //.first() 
        //- clica no último item da lista
        //.last() 
        //- clica no item da lista conforme a posição informada
        //.eq(3)
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click()
        
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 10
        //- Selecionar produto
        cy.get('[class="product-block grid"]')
        .contains('Abominable Hoodie')
        .click()
        //- Selecionar tamanho
        cy.get('ul li[data-value="XS"]').click()
         //- Selecionar cor
        cy.get('ul li[data-value="Blue"]').click()
         //- Selecionar quantidade
        cy.get('input[name="quantity"]').clear().type(quantidade)
        //- Selecionar quantidade
        cy.get('.single_add_to_cart_button').click()

        //validações
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade +' × “Abominable Hoodie” foram adicionados no seu carrinho')
    });

    it.only('Deve adicionar produtos ao carrinho usando comandos customizados', () => {
        cy.addProdutos('Abominable Hoodie', 7)
        //validações
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 7)
        cy.get('.woocommerce-message').should('contain', 7 +' × “Abominable Hoodie” foram adicionados no seu carrinho')
    });

});