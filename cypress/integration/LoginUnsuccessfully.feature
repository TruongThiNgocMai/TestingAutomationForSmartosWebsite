Feature: Navigate and Login Smartos Website Unsuccessfully
Scenario: Login unsuccessfully with input Email account does not register before
    Given I navigate to Smartos login page
    When I input Email account does not register before as "mai.truong@team.com" and "enouvo123"
    And I click on Login button
    Then I verify notice message display for case account does not register before

Scenario: Login unsuccessfully with input Password invalid 
    Given I navigate to Smartos login page
    When I input Email valid as "admin@enouvo.com" but Password invalid as "maimai123"
    And I click on Login button
    Then I verify notice message display for case password invalid

Scenario: Login unsuccessfully with do not input data for Email 
    Given I navigate to Smartos login page
    When I input data into Password filed "enouvo123"
    And I click on Login button
    Then I verify notice message display for case blank email

Scenario: Login unsuccessfully with do not input data for Password
    Given I navigate to Smartos login page
    When I input data into Email field "admin@enouvo.com"
    And I click on Login button
    Then I verify notice message display for case blank password

Scenario: Login unsuccessfully with do not input data for Email and Password
    Given I navigate to Smartos login page
    When I click on Login button
    Then I verify notice message display below email for case do not input email
    And I verify notice message display below password for case do not input password
    
