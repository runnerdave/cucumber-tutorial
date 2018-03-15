Feature: Subtraction

  Background:
    Given I start with 1

  Scenario: 1 - 0
    When I subtract 0
    Then I end up with 1

  Scenario: 1 - 1
    When I deduct 1
    Then I end up with 0