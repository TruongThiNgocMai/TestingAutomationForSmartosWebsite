Feature: Booking Services Successfully
Scenario: Booking Services Successfully
    Given I navigate to Smartos login page
    When I input valid data to Login
    | email             | password   | 
    | admin@enouvo.com  | enouvo123  |
    When I click on Login button
    Then I verify login successfully 
    When I click on Booking button
    When I input data for  
    | customerName | email                          | services  | room | package | discount |note       |
    | Ngoc Mai     | maitruongthingoc1234@gmail.com | Hot Desk  | HD   | HD_Daily| 10       |New booking|
    When I choose valid data for Gender
    When I choose valid data for Start Time
    When I choose valid data for Expected End Time 
    When I click on Create button
    # When I verify booking successfully
    
    
   