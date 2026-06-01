import { Order } from "../models/order";
import { ShippingStrategy } from "../interfaces/shipping-strategy";
import { PaymentStrategy } from "../interfaces/payment-strategy";
import { NotificationService } from "../interfaces/notification-service";

export type OrderResult = {
  orderId: string;
  shippingMethod: string;
  paymentType: string;
  shippingCost: number;
  totalAmount: number;
  paymentAmount: number;
  paymentMessage: string;
  notificationMessage: string;
};

export class OrderService {
  constructor(
    private shippingStrategy: ShippingStrategy,
    private paymentStrategy: PaymentStrategy,
    private notificationService: NotificationService
  ) {}

  processOrder(order: Order): OrderResult {
    const shippingCost = this.shippingStrategy.calculate(order);
    const paymentAmount = order.totalAmount + shippingCost;
    const paymentMessage = this.paymentStrategy.pay(paymentAmount);
    const notificationMessage = this.notificationService.notify(order);

    return {
      orderId: order.id,
      shippingMethod: this.shippingStrategy.name,
      paymentType: this.paymentStrategy.type,
      shippingCost,
      totalAmount: order.totalAmount,
      paymentAmount,
      paymentMessage,
      notificationMessage,
    };
  }
}
