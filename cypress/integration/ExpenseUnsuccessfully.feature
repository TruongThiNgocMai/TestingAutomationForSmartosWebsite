Feature: Expense Unsuccessfully

Scenario: Expense Unsuccessfully with do not input valid data for all required fields
    Given I login successfully to Smartos Page
    When I click on Expense button
    Then I verify Expense form is open
    And I click on Create button in expense form
    Then I verify notice message display below Transaction Type
    Then I verify notice message display below Fee

Scenario Outline: Expense Unsuccessfully with input incorrect format to Email
    Given I login successfully to Smartos Page
    When I click on Expense button
    Then I verify Expense form is open
    And I input email expense as <email>
    And I choose data for Transaction Type in expense
    And I input fee expense as <fee> 
    And I click on Create button in expense form
    Then I verify notice message display below Email in expense
Examples:
| email             | fee |
| mai.truong@gmail  | 10  | 

Scenario Outline: Expense Unsuccessfully with input incorrect format to Phone
    Given I login successfully to Smartos Page
    When I click on Expense button
    Then I verify Expense form is open
    And I input phone expense as <phone>
    And I choose data for Transaction Type in expense
    And I input fee expense as <fee> 
    And I click on Create button in expense form
    Then I verify notice message display below Phone in expense
Examples:
| phone             | fee |
| mai.truong@gmail  | 10  | 