Feature: Logout Smartos Website Successfully
Scenario: Logout Smartos Website Successfully 
    Given I login successfully to Smartos Page
    When I click on profile button
    And I click on Logout button
    Then I verify Logout successfully
