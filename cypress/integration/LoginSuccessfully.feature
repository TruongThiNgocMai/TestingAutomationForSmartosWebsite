Feature: Navigate and Login Smartos Website Successfully
Scenario Outline: Login successfully with input Email and Password valid on macbook-15 screen
    Given I navigate to Smartos website with macbook-15 screen
    Given I navigate to Smartos login page
    When I input valid data to <email> and <password>
    And I click on Login button
    Then I verify login successfully with macbook-15 screen
Examples:
| email             | password   | 
| admin@enouvo.com  | enouvo123  | 
    
Scenario Outline: Login successfully with input Email and Password valid on samsung-s10 screen
    Given I navigate to Smartos website with samsung-s10 screen
    Given I navigate to Smartos login page
    When I input valid data to <email> and <password>
    And I click on Login button
    Then I verify login successfully with samsung-s10 screen
Examples:
| email             | password   | 
| admin@enouvo.com  | enouvo123  | 

Scenario Outline: Login successfully with input Email and Password valid on iphone-6 screen
    Given I navigate to Smartos website with iphone-6 screen
    Given I navigate to Smartos login page
    When I input valid data to <email> and <password>
    And I click on Login button
    Then I verify login successfully with iphone-6 screen
Examples:
| email             | password   | 
| admin@enouvo.com  | enouvo123  | 

Scenario Outline: Login successfully with input Email and Password valid on iphone-6 plus screen
    Given I navigate to Smartos website with iphone-6 plus screen
    Given I navigate to Smartos login page
    When I input valid data to <email> and <password>
    And I click on Login button
    Then I verify login successfully with iphone-6 plus screen
Examples:
| email             | password   | 
| admin@enouvo.com  | enouvo123  | 
    