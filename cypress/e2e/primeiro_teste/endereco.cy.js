/// <reference types="cypress"/>
import enderecoPage from '../../support/page-objetc/enderecoPage';
const dadosEndereco = require('../../fixtures/endereco.json')


describe('Funcionalidade Endereço - Faturamento e Entrega', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.fixture('perfil.json').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    });

    it.only('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        //nessa etapa, ao adicionar a const "dadosEndereco", é possível acessar a lista de dados "[]" com seus parâmetros
        const posicao_array = 0;
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[posicao_array].nome,
            dadosEndereco[posicao_array].sobrenome,
            dadosEndereco[posicao_array].empresa,
            dadosEndereco[posicao_array].pais,
            dadosEndereco[posicao_array].endereco,
            dadosEndereco[posicao_array].numero,
            dadosEndereco[posicao_array].cidade,
            dadosEndereco[posicao_array].estado,
            dadosEndereco[posicao_array].cep,
            dadosEndereco[posicao_array].telefone,
            dadosEndereco[posicao_array].email)
        
    });
});