Feature: Booking Unsuccessfully

Scenario: Booking Unsuccessfully with do not input data for all required fields
    Given I login successfully to Smartos Page
    When I click on Booking button
    Then I verify Booking form is open
    And I click on Create button in booking form
    Then I verify notice message display below customer name
    Then I verify notice message display below email
    Then I verify notice message display below gender

Scenario Outline: Booking Unsuccessfully with using input Discount more than 100
    Given I login successfully to Smartos Page
    When I click on Booking button
    Then I verify Booking form is open
    And I input customer name as <customerName>
    And I input email as <email>
    And I choose valid data for Gender
    And I choose valid data for service
    And I input data for room as <room>
    And I input data for package as <newpackage>
    And I input discount as <discount>
    And I input data for currency
    And I choose valid data for Start Time
    And I choose valid data for Expected End Time 
    And I input data for  <note>    
    And I click on Create button in booking form
    Then I verify notice message about length display below discount 
Examples:   
| customerName       | email                          |  room           | newpackage          | discount  |currency     |note       |      
| Ngoc Ngoc          | hantruongthingoc1234@gmail.com |  S - Hot Desk   | Hot Desk Weekly     | 101       |    %        |New booking|

Scenario Outline: Create Booking Service Unsuccessfully when user choose pay money but do not input money to paid
    Given I login successfully to Smartos Page
    When I click on Booking button
    Then I verify Booking form is open
    And I input customer name as <customerName>
    And I input email as <email>
    And I choose valid data for Gender
    And I choose valid data for Service
    And I input data for room as <room>
    And I input package as <newpackage>
    And I input discount as <discount>
    And I input data for currency as VND
    And I choose valid data for Start Time
    And I choose valid data for Expected End Time 
    And I input data for <note>    
    And I click on Mark as confirmed booking checkbox
    And I click on Pay Booking checkbox
    And I do not input money for paid 
    And I choose data for Pay Type
    And I click on Create button in booking form
    Then I verify booking successfully with notice message below paid
Examples:   
| customerName | email              | room           | newpackage         | discount | note          | paid  |
| Ngoc Tan     | tan.ngoc@gmail.com | S - Hot Desk   | Hot Desk Weekly    | 100000   | Third booking | 100000| 

Scenario Outline: Create Booking Service Unsuccessfully when user input incorrect format for Email
    Given I login successfully to Smartos Page
    When I click on Booking button
    Then I verify Booking form is open
    And I input customer name as <customerName>
    And I input email as <email>
    And I choose valid data for Gender
    And I choose valid data for Service
    And I input data for room as <room>
    And I input package as <newpackage>
    And I input discount as <discount>
    And I input data for currency as VND
    And I choose valid data for Start Time
    And I choose valid data for Expected End Time 
    And I input data for <note>    
    And I click on Create button in booking form
    Then I verify booking successfully with notice message below email with incorrect formart
Examples:   
| customerName | email              | room           | newpackage         | discount | note          | paid  |
| Ngoc Tan     | tan.ngoc@gmail     | S - Hot Desk   | Hot Desk Weekly    | 100000   | Third booking | 100000| 

Scenario Outline: Create Booking Service Unsuccessfully with using old email to booking
    Given I login successfully to Smartos Page
    When I click on Booking button
    Then I verify Booking form is open
    And I input customer name as <customerName>
    And I input email as <email>
    And I choose valid data for Gender
    And I choose valid data for service
    And I input data for room as <room>
    And I input data for package as <newpackage>
    And I input discount as <discount>
    And I input data for currency
    And I choose valid data for Start Time
    And I choose valid data for Expected End Time 
    And I input data for  <note>    
    And I click on Create button in booking form
    And I go to History Page
    Then I verify booking unsuccessfully with notice message for case using old email to booking
Examples:   
| customerName   | email                 | room           | newpackage          | discount    |note         |      
| Ngoc Nam       | namhoang@gmail.com    | S - Hot Desk   | Hot Desk Monthly    | 10          |Case using old email to booking|