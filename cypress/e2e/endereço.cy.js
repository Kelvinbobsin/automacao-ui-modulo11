/// <reference types="cypress" />
import enderecoPage from "../support/page-objects/endereco.page";

describe('Funcionalidade Endereços - Faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
             cy.login(dados.usuario, dados.senha)
        })

    });

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento('kelvin', 'bobsin', 'Ritter', 'Brasil', 'Rua Ipanema', '105', 'Porto Alegre', 'Rio Grande do Sul', '48984895', '98484845', 'aluno_ebac@gmail.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});