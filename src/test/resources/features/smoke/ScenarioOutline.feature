@ggg
Feature: Scenario Outline Demo


  @scenarioOutline
  Scenario Outline: Demo
    Given user enter "<email>" in email input field
    And user enter "<password>" in password input field
    When user click Login button
    Then user should successfully sign in
    Examples:
      | email           | password |
      | test@gmail.com  | 123      |
      | test1@gmail.com | 1234     |
      | test2@gmail.com | 12345    |