Feature: Button Click

  Scenario: User can interact with a basic button
    Given the user navigates to "https://ui-buttons.web.app/basic"
    When the user clicks on the "Basic Button"
    Then the button should show a click confirmation
