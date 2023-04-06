import { SearchPage } from "../integration/pages/SearchPage";
const searchPage = new SearchPage();

export {};
declare global {
  namespace Cypress {
    interface Chainable {
      verifyTitle(title: string): Chainable<any>;
      acceptPrivacyDialogGoogle(): Chainable<any>;
    }
  }
}

Cypress.Commands.add("verifyTitle", (title) => {
  cy.title().should("contain", title);
});

Cypress.Commands.add("acceptPrivacyDialogGoogle", () => {
  searchPage.elements.acceptPrivacy().should("be.visible").click();
});
