/// <reference types="cypress" />

describe("Teste para a agenda", () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    })
    it("Deve adicionar um contato", () => {
        cy.get('[type="text"]').type("Juan Guimaraes");
        cy.get('[type="email"]').type("juanguimaraes@gmail.com");
        cy.get('[type="tel"]').type('21986512987');
        cy.get('.adicionar').click();
    });
    it("Deve editar um contato", () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();
        cy.get('[type="text"]').clear().type("Jose Teste");
        cy.get('[type="email"]').clear().type("joseteste@teste.com");
        cy.get('[type="tel"]').clear().type("21123456789");
        cy.get('.alterar').click();
    });
    it("Deve apagar um contato", () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click();
    })
})