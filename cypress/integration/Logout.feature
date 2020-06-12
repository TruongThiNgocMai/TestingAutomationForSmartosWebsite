Feature: Logout Smartos Website Successfully
Scenario: Logout Smartos Website Successfully 
    Given I navigate to Smartos login page
    When I input valid data to Login
    When I click on Login button
    Then I verify login successfully 
    When I click on profile button
    When I click on Logout button
    Then I verify Logout successfully
