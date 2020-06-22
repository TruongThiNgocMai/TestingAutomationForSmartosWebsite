Feature: Expense Successfully

Scenario Outline: Expense Successfully with input valid data for all fields
    Given I login successfully to Smartos Page
    When I click on Expense button
    Then I verify Expense form is open
    And I input customer name for expense <customerName>
    And I input phone for expense <phone>
    And I input email for expense <email>
    And I choose data for Transaction Type in Expense
    And I choose data for Booking ID
    And I input fee for expense <fee>
    And I choose data for Payment Type
    And I input note for expense <note>
    And I click on Create button in Expense form
    Then I go to Transaction Page
    Then I verify user create Expense successfully with <customerName>, <fee>

Examples:
| customerName   | phone        | email                             | fee   | note          |
| Ngoc Mai       | 0396987863   | maitruongthingoc1234@gmail.com    | 10    | first Expense  |
