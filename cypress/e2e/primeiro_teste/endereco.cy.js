/// <reference types="cypress"/>
//var faker = require('faker')
import { faker } from '@faker-js/faker';

describe('Funcionalidade Endereço - Faturamento e Entrega', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.fixture('perfil.json').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
        

    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        
        
    });
});