import { SearchPage } from "../pages/SearchPage";
const { Given, Then, When } = require("cypress-cucumber-preprocessor/steps");
const searchPage = new SearchPage();

Given("I navigate to {string}", (title: string) => {
  cy.visit("/");
  cy.acceptPrivacyDialogGoogle();
  searchPage.verifyTitle(title);
});

When("I search for {string}", (keyword: string) => {
  searchPage.searchTerms(keyword);
});

Then("I expect to see results for {string}", (keyword: string) => {
  searchPage.validateSearchResult(keyword);
});
