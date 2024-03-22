/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })
    it('Deve renderizar 3 contatos inicias', () =>{
        cy.get('.sc-dmqHEX').should('have.length', 3)
    })
    it('Deve adicionar um novo contato', () => {
        cy.get('input[type="text"]').type('Bruno Guimarães')
        cy.get('input[type="email"]').type('brunogdepaula@hotmail.com')
        cy.get('input[type="tel"]').type('21987670200')
        cy.get('.adicionar').click()
        cy.get('.sc-dmqHEX').should('have.length', 4)
    })

    it('Deve remover o segundo contato da lista', () => {
        cy.get('.delete').eq(1).click()
        cy.get('.sc-dmqHEX').should('have.length', 3)
    })

    it('Deve alterar o nome do primeiro contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('Nome Alterado')
        cy.get('.alterar').click()
    })
})