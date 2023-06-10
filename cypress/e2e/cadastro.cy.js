/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Funcionalidade cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o cadastro com sucesso', () => {

        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)
        

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('teste@teste')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        
        
    });

    it.only('Deve exibir mensagem de erro ao inserir endereço de email inválido', () => {
        cy.get('#reg_email').type('kkkk@kkkk')
        cy.get('#reg_password').type('teste@teste')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Erro: Informe um endereço de e-mail válido.')
    });
});