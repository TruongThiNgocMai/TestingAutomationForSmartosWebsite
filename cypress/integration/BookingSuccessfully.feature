Feature: Create Booking Services Successfully
Scenario Outline: Create Booking Service Successfully
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
    Then I verify booking successfully with <customerName>, <email>, <newpackage>
Examples:   
| customerName   | email                 | room           | newpackage          | discount    |note         |      
| Ngoc Nam       | namhoang@gmail.com    | S - Hot Desk   | Hot Desk Monthly    | 10          |First booking|
| Ngoc Tai       | taitruon@gmail.com    | S - Hot Desk   | Hot Desk Weekly     |     ''      |             |           

Scenario Outline: Create Booking Service Successfully with time is Hourly
    Given I login successfully to Smartos Page
    When I click on Booking button
    Then I verify Booking form is open
    And I input customer name as <customerName>
    And I input email as <email>
    And I choose valid data for Gender
    And I choose valid data for service
    And I input room as <room>
    And I input package as <newpackage>
    And I input discount as <discount>
    And I input data for currency
    And I choose valid data for Start Time
    And I choose valid data for Expected End Time in day
    And I choose the data for hour start  
    And I input data for <note> 
    And I click on Create button in booking form
    And I go to History Page
    Then I verify booking successfully with <customerName>, <email>, <newpackage>
    Examples:   
| customerName | email              | room           | newpackage         | discount   | note          |      
| Ngoc Chi     | chiingoc@gmail.com | S - Hot Desk   | Hot Desk Hourly    | 10         | Second booking|

Scenario Outline: Create Booking Service Successfully when user pay money
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
    And I input paid as <paid>
    And I choose data for Pay Type
    And I click on Create button in booking form
    And I go to History Page
    Then I verify booking successfully with <customerName>, <email>, <newpackage>
Examples:   
| customerName | email              | room           | newpackage         | discount | note          | paid  |
| Ngoc Tan     | tan.ngoc@gmail.com | S - Hot Desk   | Hot Desk Weekly    | 100000   | Third booking | 100000| 
