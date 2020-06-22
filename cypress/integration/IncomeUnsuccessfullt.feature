Feature: Income Unsuccessfully

Scenario: Income Unsuccessfully with do not input valid data for all required fields
    Given I login successfully to Smartos Page
    When I click on Income button
    Then I verify Income form is open
    And I click on Create button in income form
    Then I verify notice message display below Transaction Type
    Then I verify notice message display below Fee

Scenario Outline: Income Unsuccessfully with input incorrect format to Email
    Given I login successfully to Smartos Page
    When I click on Income button
    Then I verify Income form is open
    And I input email income as <email>
    And I choose data for Transaction Type in income
    And I input fee income as <fee> 
    And I click on Create button in income form
    Then I verify notice message display below Email
Examples:
| email             | fee |
| mai.truong@gmail  | 10  | 

Scenario Outline: Income Unsuccessfully with input incorrect format to Phone
    Given I login successfully to Smartos Page
    When I click on Income button
    Then I verify Income form is open
    And I input phone income as <phone>
    And I choose data for Transaction Type in income
    And I input fee income as <fee> 
    And I click on Create button in income form
    Then I verify notice message display below Phone 
Examples:
| phone             | fee |
| mai.truong@gmail  | 10  | 