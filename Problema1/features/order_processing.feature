Feature: Order processing
  El sistema debe delegar los cálculos de envío, el pago y la notificación.

  Scenario: Process order with standard shipping and PayPal
    Given an order with id "ORDER-1" and total amount 100
    And shipping method "standard"
    And payment type "paypal"
    When the order is processed
    Then the shipping cost should be 10
    And the payment amount should be 110
    And the payment message should be "Procesando pago de $110 vía PayPal..."
    And the notification message should be "Email enviado: Su pedido ORDER-1 ha sido procesado."

  Scenario: Process order with express shipping and credit card
    Given an order with id "ORDER-1" and total amount 100
    And shipping method "express"
    And payment type "credit_card"
    When the order is processed
    Then the shipping cost should be 25
    And the payment amount should be 125
    And the payment message should be "Cargando $125 a la tarjeta de crédito..."
    And the notification message should be "Email enviado: Su pedido ORDER-1 ha sido procesado."
