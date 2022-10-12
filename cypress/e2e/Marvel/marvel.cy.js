/// <reference types="cypress" />


describe('test marvel app', () => {
  beforeEach(() => {
 
    cy.visit('http://localhost:5173')
  })

  it('header image appear', () => {
  
    cy.get('[data-test=header-home]').should('be.visible')
  })

  it('check api items ', () => {

    cy.get('[data-test=comics-list]').should('have.length', 20)
  })
})
