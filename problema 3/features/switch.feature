Feature: Switch operates devices

  Scenario Outline: Operate device on and off
    Given a "<device>" device
    When I operate "<action>"
    Then the output should contain "<expected>"

    Examples:
      | device          | action | expected                           |
      | TraditionalBulb | on     | Bombilla tradicional encendida     |
      | TraditionalBulb | off    | Bombilla tradicional apagada       |
      | SmartLight      | on     | SmartLight encendida               |
      | SmartLight      | off    | SmartLight apagada                 |
