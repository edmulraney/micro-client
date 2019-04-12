context('Button', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=button--with-text')
  })

  it('has text', () => {
    cy.contains('Some text').should('be.visible')
  })

  it('changes text when clicked', () => {
    cy.get('[data-testid=btn-id]').click()
    cy.get('[data-testid=btn-id]').should('contain', 'You clicked me')
  })

  it('passes accessibility', () => {
    cy.injectAxe()
    cy.checkA11y('#root')
  })
})
