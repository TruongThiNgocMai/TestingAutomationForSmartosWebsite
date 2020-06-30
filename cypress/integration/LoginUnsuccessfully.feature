Feature: Navigate and Login Smartos Website Unsuccessfully

# MACBOOK-15
Scenario: Login unsuccessfully with input Email account does not register before with macbook-15 screen
    Given I navigate to Smartos website with macbook-15 screen 
    Given I navigate to Smartos login page
    When I input Email account does not register before as "mai.truong@team.com" and "enouvo123"
    And I click on Login button
    Then I verify notice message display for case account does not register before with macbook-15 screen

Scenario: Login unsuccessfully with input Password invalid with macbook-15 screen
    Given I navigate to Smartos website with macbook-15 screen 
    Given I navigate to Smartos login page
    When I input Email valid as "admin@enouvo.com" but Password invalid as "maimai123"
    And I click on Login button
    Then I verify notice message display for case password invalid with macbook-15 screen

Scenario: Login unsuccessfully with do not input data for Email with macbook-15 screen
    Given I navigate to Smartos website with macbook-15 screen 
    Given I navigate to Smartos login page
    When I input data into Password filed "enouvo123"
    And I click on Login button
    Then I verify notice message display for case blank email with macbook-15 screen

Scenario: Login unsuccessfully with do not input data for Password with macbook-15 screen
    Given I navigate to Smartos website with macbook-15 screen
    Given I navigate to Smartos login page
    When I input data into Email field "admin@enouvo.com"
    And I click on Login button
    Then I verify notice message display for case blank password with macbook-15 screen

Scenario: Login unsuccessfully with do not input data for Email and Password with macbook-15 screen
    Given I navigate to Smartos website with macbook-15 screen
    Given I navigate to Smartos login page
    When I click on Login button
    Then I verify notice message display below email for case do not input email with macbook-15 screen
    And I verify notice message display below password for case do not input password with macbook-15 screen

# SAMSUNG-S10
Scenario: Login unsuccessfully with input Email account does not register before with samsung-s10 screen
    Given I navigate to Smartos website with samsung-s10 screen 
    Given I navigate to Smartos login page
    When I input Email account does not register before as "mai.truong@team.com" and "enouvo123"
    And I click on Login button
    Then I verify notice message display for case account does not register before with samsung-s10 screen

Scenario: Login unsuccessfully with input Password invalid with samsung-s10 screen
    Given I navigate to Smartos website with samsung-s10 screen 
    Given I navigate to Smartos login page
    When I input Email valid as "admin@enouvo.com" but Password invalid as "maimai123"
    And I click on Login button
    Then I verify notice message display for case password invalid with samsung-s10 screen

Scenario: Login unsuccessfully with do not input data for Email with samsung-s10 screen
    Given I navigate to Smartos website with samsung-s10 screen 
    Given I navigate to Smartos login page
    When I input data into Password filed "enouvo123"
    And I click on Login button
    Then I verify notice message display for case blank email with samsung-s10 screen

Scenario: Login unsuccessfully with do not input data for Password with samsung-s10 screen
    Given I navigate to Smartos website with samsung-s10 screen
    Given I navigate to Smartos login page
    When I input data into Email field "admin@enouvo.com"
    And I click on Login button
    Then I verify notice message display for case blank password with samsung-s10 screen

Scenario: Login unsuccessfully with do not input data for Email and Password with samsung-s10 screen
    Given I navigate to Smartos website with samsung-s10 screen
    Given I navigate to Smartos login page
    When I click on Login button
    Then I verify notice message display below email for case do not input email with samsung-s10 screen
    And I verify notice message display below password for case do not input password with samsung-s10 screen

# IPHONE 6
Scenario: Login unsuccessfully with input Email account does not register before with iphone 6 screen
    Given I navigate to Smartos website with iphone 6 screen 
    Given I navigate to Smartos login page
    When I input Email account does not register before as "mai.truong@team.com" and "enouvo123"
    And I click on Login button
    Then I verify notice message display for case account does not register before with iphone 6 screen

Scenario: Login unsuccessfully with input Password invalid with iphone 6 screen
    Given I navigate to Smartos website with iphone 6 screen 
    Given I navigate to Smartos login page
    When I input Email valid as "admin@enouvo.com" but Password invalid as "maimai123"
    And I click on Login button
    Then I verify notice message display for case password invalid with iphone 6 screen

Scenario: Login unsuccessfully with do not input data for Email with iphone 6 screen
    Given I navigate to Smartos website with iphone 6 screen 
    Given I navigate to Smartos login page
    When I input data into Password filed "enouvo123"
    And I click on Login button
    Then I verify notice message display for case blank email with iphone 6 screen

Scenario: Login unsuccessfully with do not input data for Password with iphone 6 screen
    Given I navigate to Smartos website with iphone 6 screen
    Given I navigate to Smartos login page
    When I input data into Email field "admin@enouvo.com"
    And I click on Login button
    Then I verify notice message display for case blank password with iphone 6 screen

Scenario: Login unsuccessfully with do not input data for Email and Password with iphone 6 screen
    Given I navigate to Smartos website with iphone 6 screen
    Given I navigate to Smartos login page
    When I click on Login button
    Then I verify notice message display below email for case do not input email with iphone 6 screen
    And I verify notice message display below password for case do not input password with iphone 6 screen
    
# IPHONE 6 PLUS
Scenario: Login unsuccessfully with input Email account does not register before with iphone 6 plus screen
    Given I navigate to Smartos website with iphone 6 plus screen 
    Given I navigate to Smartos login page
    When I input Email account does not register before as "mai.truong@team.com" and "enouvo123"
    And I click on Login button
    Then I verify notice message display for case account does not register before with iphone 6 plus screen

Scenario: Login unsuccessfully with input Password invalid with iphone 6 plus screen
    Given I navigate to Smartos website with iphone 6 plus screen 
    Given I navigate to Smartos login page
    When I input Email valid as "admin@enouvo.com" but Password invalid as "maimai123"
    And I click on Login button
    Then I verify notice message display for case password invalid with iphone 6 plus screen

Scenario: Login unsuccessfully with do not input data for Email with iphone 6 plus screen
    Given I navigate to Smartos website with iphone 6 plus screen 
    Given I navigate to Smartos login page
    When I input data into Password filed "enouvo123"
    And I click on Login button
    Then I verify notice message display for case blank email with iphone 6 plus screen

Scenario: Login unsuccessfully with do not input data for Password with iphone 6 plus screen
    Given I navigate to Smartos website with iphone 6 plus screen
    Given I navigate to Smartos login page
    When I input data into Email field "admin@enouvo.com"
    And I click on Login button
    Then I verify notice message display for case blank password with iphone 6 plus screen

Scenario: Login unsuccessfully with do not input data for Email and Password with iphone 6 plus screen
    Given I navigate to Smartos website with iphone 6 plus screen
    Given I navigate to Smartos login page
    When I click on Login button
    Then I verify notice message display below email for case do not input email with iphone 6 plus screen
    And I verify notice message display below password for case do not input password with iphone 6 plus screen