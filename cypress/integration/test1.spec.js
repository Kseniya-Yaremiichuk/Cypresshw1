/// <reference types="cypress" />
describe('Login Conduit', () => {
    it('Login', () => {
        cy.visit('https://react-redux.realworld.io/#/login?_k=lmieg5');
        cy.get(':nth-child(1) > .form-control').type('varu@mailinator.com');
        cy.get(':nth-child(2) > .form-control').type('qwerty123');
        cy.get('.btn').click();
        cy.get(':nth-child(4) > .nav-link').should('contain.text', 'Test1forcypress');
    });
});