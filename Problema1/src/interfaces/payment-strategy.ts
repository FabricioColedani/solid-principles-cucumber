export interface PaymentStrategy {
  type: string;
  pay(amount: number): string;
}
