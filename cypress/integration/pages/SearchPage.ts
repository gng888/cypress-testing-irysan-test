export class SearchPage {
  elements = {
    searchBox: () => cy.get("input[name=q]"),
    resultStat: () => cy.get("#result-stats"),
    acceptPrivacy: () => cy.get("#L2AGLb"),
  };

  verifyTitle(title) {
    cy.title().should("contain", title);
  }

  searchTerms(keyword) {
    this.elements
      .searchBox()
      .should("be.visible", { timeout: 3000 })
      .clear()
      .type(keyword + "{enter}");
  }

  validateSearchResult(keyword) {
    cy.url().should("contain", `/search?q=${keyword.toLowerCase()}`);
    this.elements.resultStat().should("be.visible", { timeout: 5000 });
    cy.contains(keyword).should("exist");
  }
}
