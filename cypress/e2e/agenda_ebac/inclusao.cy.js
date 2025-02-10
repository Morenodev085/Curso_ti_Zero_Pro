/// <reference types="cypress" />

describe("Teste para inclusão de novos contatos", () => {
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

    it("deve alterar o contato", () => {
        // Selecionando o botão de editar de forma mais específica
        cy.get('.sc-iAEyYk > :nth-child(5)').find('button').contains('Editar').click();
        cy.get('[type="text"]').clear().type('Moreno Silva')
        cy.get('[type="email"]').clear().type('moreno.silva@exemplo.com')
        cy.get('[type="tel"]').clear().type('992992929')

        // Clicando no botão 'Salvar'
        cy.get('button').contains('Salvar').click()

        // Verificando se o nome foi atualizado
        cy.contains('Moreno Silva').should('exist')
    })

    it("deve deletar o contato", () => {
        // removendo contato
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()

        // Verificando se o contato foi removido
        cy.contains('Moreno Silva').should('not.exist')
    })
})
