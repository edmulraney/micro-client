context('Storybook', () => {
    it('passes button', () => {
        cy.visit('/iframe.html?id=button--with-text')
        cy.contains('Hello Button')
        expect(true).to.equal(true)
    })
})