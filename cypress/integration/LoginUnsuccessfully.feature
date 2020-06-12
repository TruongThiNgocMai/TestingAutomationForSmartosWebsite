Feature: Navigate and Login Smartos Website Unsuccessfully
# Scenario: Login unsuccessfully with input Email account does not register before
#     Given I navigate to Smartos login page
#     When I input Email account does not register before
#     | email                 | password   | 
#     | mai.truong@team.com   | enouvo123  | 
#     When I click on Login button
#     Then I verify notice message display 

# Scenario: Login unsuccessfully with input Password invalid 
#     Given I navigate to Smartos login page
#     When I input Email valid but Password invalid
#     | email                 | password   | 
#     | mai.truong@team.com   | enouvo123  | 
#     When I click on Login button
#     Then I verify notice message display

# Scenario: Login unsuccessfully with do not input data for Email 
#     Given I navigate to Smartos login page
#     When I do not input data for Email
#     | password   | 
#     | enouvo123  | 
#     When I click on Login button
#     Then I validate blank for Email

# Scenario: Login unsuccessfully with do not input data for Password
#     Given I navigate to Smartos login page
#     When I do not input data for Password
#     | email                 | 
#     | mai.truong@team.com   |
#     When I click on Login button
#     Then I validate blank for Password

Scenario: Login unsuccessfully with do not input data for Email and Password
    Given I navigate to Smartos login page
    When I click on Login button
    Then I verify notice message display
    
