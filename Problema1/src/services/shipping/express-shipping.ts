import { Order } from "../../models/order";
import { ShippingStrategy } from "../../interfaces/shipping-strategy";

export class ExpressShipping implements ShippingStrategy {
  name = "express";

  calculate(order: Order): number {
    return 25;
  }
}
