Feature: Google search Journey
    As a user
    I want to search for keywords in Google
    So that I can see the results

    Background: Navigating to Google
        Given I navigate to "Google"

    Scenario Outline: Google Test Success, Searching for <SearchTerms>
        When I search for "<SearchTerms>"
        Then I expect to see results for "<Result>"

        Examples:
            | SearchTerms | Result |
            | dogs        | dogs   |
            | snake       | snake  |
            | robot       | robot  |