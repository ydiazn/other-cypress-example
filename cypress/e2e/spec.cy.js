describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})


describe('My second Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(false)
  })
})


/*
  Given a user visits https://example.cypress.io
  When they click the link labeled type
  And they type "fake@email.com" into the [data-testid="action-email"] input
  Then the URL should include /commands/actions
  And the [data-testid="action-email"] input has "fake@email.com" as its value
*/

describe('Real test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it
    cy.get('.action-email').type('fake@email.com')

    //  Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})
