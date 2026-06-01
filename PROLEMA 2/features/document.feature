Feature: Document processing

  Scenario: Process editable document
    Given a word document
    When I process it as editable
    Then it should open and edit and save

  Scenario: View readonly pdf
    Given a readonly pdf
    When I view it
    Then it should open only
