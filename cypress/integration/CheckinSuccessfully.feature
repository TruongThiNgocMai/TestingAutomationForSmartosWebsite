Feature: Checkin Successfully

Scenario Outline: User Checkin Successfully
   Given I login successfully to Smartos Page
   Then I verify I stay at Dashboard Page
   When I choose the information of customer to checkin are <bookingID>, <customerName>, <services>, <room>, <packageType>
   And I click on checkin icon in the table
   And I click on checkin button in the checkin form
   And I go to Checked in Tab
   Then I verify I checkin successfully with <bookingID>, <customerName>, <services>, <room>, <packageType>

Examples:
| bookingID     | customerName  | services   | room                | packageType       | 
| #BK-0620-EE08 | Ngoc Ngoc     | Cowork     | Hot Desks Standard  | Week No-colive    | 