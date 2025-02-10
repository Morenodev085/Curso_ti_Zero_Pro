/// <reference types="cypress" />

describe('teste para a home', () => {
    it('deve rederizar 4 vagas', () => {
        cy.visit('https://ebac-jobs-e2e.vercel.app')
        cy.get('.ListaVagas_vagas__gnNZn > li').should('have.length', 4)
    })
    it('Deve filtrar por fullstack', () => {
        cy.visit('https://ebac-jobs-e2e.vercel.app')
        cy.get('.FormVagas_campo__E1ppF').type('fullstack')
        cy.get('button[type="submit"]').click()
        cy.get('.ListaVagas_vagas__gnNZn > li').should('have.length', 1)
    })
})