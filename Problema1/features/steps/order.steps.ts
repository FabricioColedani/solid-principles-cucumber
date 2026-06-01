import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import { Order } from "../../src/models/order";
import { OrderService, OrderResult } from "../../src/services/order-service";
import { StandardShipping } from "../../src/services/shipping/standard-shipping";
import { ExpressShipping } from "../../src/services/shipping/express-shipping";
import { PayPalPayment } from "../../src/services/payment/paypal-payment";
import { CreditCardPayment } from "../../src/services/payment/credit-card-payment";
import { EmailNotificationService } from "../../src/services/notification/email-notification-service";
import { PaymentStrategy } from "../../src/interfaces/payment-strategy";
import { ShippingStrategy } from "../../src/interfaces/shipping-strategy";
import { NotificationService } from "../../src/interfaces/notification-service";

let order: Order;
let shippingStrategy: ShippingStrategy;
let paymentStrategy: PaymentStrategy;
let notificationService: NotificationService;
let orderResult: OrderResult;

Given("an order with id {string} and total amount {int}", function (id: string, totalAmount: number) {
  order = new Order(id, totalAmount);
});

Given("shipping method {string}", function (shippingMethod: string) {
  if (shippingMethod === "standard") {
    shippingStrategy = new StandardShipping();
  } else if (shippingMethod === "express") {
    shippingStrategy = new ExpressShipping();
  } else {
    throw new Error(`Unknown shipping method: ${shippingMethod}`);
  }
});

Given("payment type {string}", function (paymentType: string) {
  if (paymentType === "paypal") {
    paymentStrategy = new PayPalPayment();
  } else if (paymentType === "credit_card") {
    paymentStrategy = new CreditCardPayment();
  } else {
    throw new Error(`Unknown payment type: ${paymentType}`);
  }
});

When("the order is processed", function () {
  notificationService = new EmailNotificationService();
  const service = new OrderService(shippingStrategy, paymentStrategy, notificationService);
  orderResult = service.processOrder(order);
});

Then("the shipping cost should be {int}", function (expectedShippingCost: number) {
  assert.strictEqual(orderResult.shippingCost, expectedShippingCost);
});

Then("the payment amount should be {int}", function (expectedPaymentAmount: number) {
  assert.strictEqual(orderResult.paymentAmount, expectedPaymentAmount);
});

Then("the payment message should be {string}", function (expectedMessage: string) {
  assert.strictEqual(orderResult.paymentMessage, expectedMessage);
});

Then("the notification message should be {string}", function (expectedMessage: string) {
  assert.strictEqual(orderResult.notificationMessage, expectedMessage);
});
