import { Order } from "../models/order";

export interface ShippingStrategy {
  name: string;
  calculate(order: Order): number;
}
