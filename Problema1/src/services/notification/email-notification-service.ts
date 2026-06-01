import { NotificationService } from "../../interfaces/notification-service";
import { Order } from "../../models/order";

export class EmailNotificationService implements NotificationService {
  notify(order: Order): string {
    return `Email enviado: Su pedido ${order.id} ha sido procesado.`;
  }
}
