describe('Home Test', () => {
	beforeEach(() => {
		cy.setBaseUrl();
		cy.setSessionToken();
	})
	it('should go home', () => {
		cy.server();
		cy.visit('/');
		cy.getByText('Booyah');
	});
});
