describe('page', () => {
  it('works', () => {
		cy.visit("https://example.cypress.io/commands/files")

		cy.server()
		cy.fixture('example.json5').as('comment')
		cy.route('GET', 'comments/*', '@comment').as('getComment')

		// we have code that gets a comment when
		// the button is clicked in scripts.js
		cy.get('.fixture-btn').click()

		cy.wait('@getComment').its('responseBody')
		  // .should('have.property', 'name')
		  .should('include', 'Using fixtures to represent data')
        
  })
})
