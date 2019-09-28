import '@testing-library/cypress/add-commands';

declare global {
	namespace Cypress {
		interface Chainable {
			setBaseUrl: () => void;
			setSessionToken: () => void;
		}
	}
}

function setBaseUrl(): void {
	window.localStorage.setItem('baseUrl', '');
}

function setSessionToken(): void {
	window.localStorage.setItem('access_token', 'howdy1234');
}

Cypress.Commands.add('setBaseUrl', setBaseUrl);
Cypress.Commands.add('setSessionToken', setSessionToken);
