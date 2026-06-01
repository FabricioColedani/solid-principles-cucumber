import { Order } from "../../models/order";
import { ShippingStrategy } from "../../interfaces/shipping-strategy";

export class StandardShipping implements ShippingStrategy {
  name = "standard";

  calculate(order: Order): number {
    return 10;
  }
}
