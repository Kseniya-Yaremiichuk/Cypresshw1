/// <reference types="cypress" />
let user;

describe('Sign up Conduit', () => {
    before(function () {
        cy.task("freshUser").then((freshUser) => {
            user = freshUser;
        });
    });

    it('Sign up with faker', () => {
        cy.visit('https://react-redux.realworld.io/#/register?_k=zrirzp');
        cy.get(':nth-child(1) > .form-control').type(user.username);
        cy.get(':nth-child(2) > .form-control').type(user.email);
        cy.get(':nth-child(3) > .form-control').type(user.password);
        cy.get('.btn').click();
        cy.get(':nth-child(4) > .nav-link').should('contain.text', user.username);
    });
});