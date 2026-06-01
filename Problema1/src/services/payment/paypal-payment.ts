import { PaymentStrategy } from "../../interfaces/payment-strategy";

export class PayPalPayment implements PaymentStrategy {
  type = "paypal";

  pay(amount: number): string {
    return `Procesando pago de $${amount} vía PayPal...`;
  }
}
