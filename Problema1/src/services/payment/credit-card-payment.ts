import { PaymentStrategy } from "../../interfaces/payment-strategy";

export class CreditCardPayment implements PaymentStrategy {
  type = "credit_card";

  pay(amount: number): string {
    return `Cargando $${amount} a la tarjeta de crédito...`;
  }
}
