import { Order } from "../models/order";

export interface NotificationService {
  notify(order: Order): string;
}
