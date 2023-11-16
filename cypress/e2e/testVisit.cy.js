/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('test visit', () => {

  
    it('visit', () => {
        cy.visit('http://testphp.vulnweb.com/login.php')
        
        cy.get(":nth-child(1) > td > input").type('test')
        cy.get(":nth-child(2) > td > input").type('test')

        cy.get(':nth-child(3) > td > input').click().debug()

        cy.get(':nth-child(6) > td > input').should('be.visible')
      })
  })
  