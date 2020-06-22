Feature: Navigate and Login Smartos Website Successfully
Scenario Outline: Login successfully with input Email and Password invalid
    Given I navigate to Smartos login page
    When I input valid data to <email> and <password>
    And I click on Login button
    Then I verify login successfully 
Examples:
| email             | password   | 
| admin@enouvo.com  | enouvo123  | 
    