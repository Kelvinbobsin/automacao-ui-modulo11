/// <reference types="cypress" />

describe('Funcionalidade Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Atlas Fitness Tank')
            .click()
    });

    it('Adicionar um produto no carrinho', () => {
        var quantidade = 4

        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().click(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain' , '“Abominable Hoodie” foi adicionado no seu carrinho.')
    });

    it('Adicionar produto aos favoritos', () => {
        cy.get('[class="product-block grid"]')
        .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.summary > .yith-wcwl-add-to-wishlist > .yith-wcwl-add-button > .add_to_wishlist > :nth-child(2) > span').click()
        cy.get('#yith-wcwl-message').should('contain' , 'Produto adicionado!')
    });

    it.only('Deve adicionar produtos ao carrinho - usando comando customizado', () => {
        cy.addprodutos('Atlas Fitness Tank', 'XS', 'Blue', 2)
    });

    it.only('Deve adicionar produtos ao carrinho - usando comando customizado', () => {
        cy.addprodutos('Abominable Hoodie', 'S', 'Blue', 2)
    });

});