Feature: Income Successfully

Scenario Outline: Income Successfully with input valid data for all fields
    Given I login successfully to Smartos Page
    When I click on Income button
    Then I verify Income form is open
    And I input customer name for income <customerName>
    And I input phone for income <phone>
    And I input email for income <email>
    And I choose data for Transaction Type in income
    And I choose data for Booking ID in income
    And I input fee for income <fee>
    And I choose data for Payment Type
    And I input note for income <note>
    And I click on Create button in income form
    Then I go to Transaction Page
    Then I verify user create income successfully with <customerName>, <fee>

Examples:
| customerName   | phone        | email                             | fee   | note          |
| Ngoc Mai       | 0396987863   | maitruongthingoc1234@gmail.com    | 10    | first income  |
