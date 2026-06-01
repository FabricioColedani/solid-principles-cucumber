import { Order } from "./models/order";
import { OrderService } from "./services/order-service";
import { StandardShipping } from "./services/shipping/standard-shipping";
import { PayPalPayment } from "./services/payment/paypal-payment";
import { EmailNotificationService } from "./services/notification/email-notification-service";

const order = new Order("ORDER-123", 100);
const orderService = new OrderService(
  new StandardShipping(),
  new PayPalPayment(),
  new EmailNotificationService()
);

const result = orderService.processOrder(order);
console.log(result);
