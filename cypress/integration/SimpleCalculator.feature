Feature: SimpleCalculator

  Scenario Outline: MULTIPLICATION
    Given User is on Simple Calculator page
    When User types "<number1>" in Number1 input
    And User types "<number2>" in Number2 input
    And User selects "<operation>" operation from dropdown
    And User presses the CALCULATE button
    Then Result should display "<expectedResult>"
    Examples:
      | number1 | number2 | operation      | expectedResult            |
      | 100     | 100     | MULTIPLICATION | 10000                     |
      | -100    | -100    | MULTIPLICATION | 10000                     |
      |         |         | MULTIPLICATION | One number input is empty |
      | 100     |         | MULTIPLICATION | One number input is empty |
      |         | 100     | MULTIPLICATION | One number input is empty |

  #@focus
  Scenario Outline: DIVISION
    Given User is on Simple Calculator page
    When User types "<number1>" in Number1 input
    And User types "<number2>" in Number2 input
    And User selects "<operation>" operation from dropdown
    And User presses the CALCULATE button
    Then Result should display "<expectedResult>"
    Examples:
      | number1 | number2 | operation | expectedResult     |
      | 100     | 0       | DIVISION  | Cannot divide by 0 |