/// <reference types="cypress" />

describe('teste para a pagina de candidatura', () => {

    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app')
    })

    it('deve levar ao formulario', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()  // Corrigido aqui com os parênteses
        cy.get('input').shadow('have.length', 7)
    })

    it('deve preencher o formulario', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()  
        cy.get('input[name="nome-completo"]').type('Moreno Almeida')
        cy.get('input[name="email"]').type('moreno.ferreia11@teste.com')
        cy.get('input[name="telefone"]').type('21995079506')
        cy.get('input[name="endereco"]').type('rua1 casa 2')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
    })
})
