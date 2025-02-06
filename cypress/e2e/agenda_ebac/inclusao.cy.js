/// <reference types="cypress" />

describe("Teste para inclusao de novos contatos", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app")
    })

    it("deve incluir um contato", () => {
        cy.get('[type="text"]').type('Moreno Almeida')
        cy.get('[type="email"]').type('moreno.exemplo@exemplo.com')
        cy.get('[type="tel"]').type('992992929')
        cy.get('button').contains('Adicionar').click()
        cy.contains('Moreno Almeida').should('exist')
    })

    it("deve altera o contato", () => {
        cy.contains('Moreno Almeida').parent().find('button').contains('editar').click()
        cy.get('[type="text"]').type('Moreno Silva')
        cy.get('[type="email"]').type('moreno.silva@exemplo.com')
        cy.get('[type="tel"]').type('992992929')
        cy.get('button').contains('Adicionar').click()
    })
    it("deve deletar o contato", () => {
        // Inclui o contato antes de tentar removê-lo
        cy.contains('Moreno Almeida').parent().find('button').contains('editar').click()

        cy.get('[type="text"]').type('Moreno Silva')
        cy.get('[type="email"]').type('moreno.silva@exemplo.com')
        cy.get('[type="tel"]').type('992992929')
        
        // Verifica se o contato foi adicionado antes de tentar deletá-lo
        cy.get('button').contains('salvar').click()
        cy.contains('Moreno Silva').should('exist')
    
        // Tenta remover o contato
        cy.contains('Moreno Silva').parent().find('button').contains('Remover').click()
    
        // Verifica se o contato foi removido
        cy.contains('Moreno Silva').should('not.exist')
    })
})
