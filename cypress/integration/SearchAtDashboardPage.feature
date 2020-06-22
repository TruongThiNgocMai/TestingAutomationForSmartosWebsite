Feature: Search data at dashboard page

Scenario Outline: Search information successfully via choose Services 
    Given I login successfully to Smartos Page
    Then I verify I stay at Dashboard Page
    # When I choose Services have booking before <serviceBookingBefore>
    # And I click on Filter button
    # Then I verify user search information via Services successfully with <serviceBookingBefore>
    And I click on Clear button
    And I choose Services have not booking before <serviceNotBookingBefore>
    And I click on Filter button
    Then I verify user search information is empty

Examples:
| serviceBookingBefore | serviceNotBookingBefore |
| Colive               | Event Space             |