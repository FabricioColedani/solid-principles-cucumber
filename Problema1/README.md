# solid-principles-cucumber
Actividad Programación Orientada a Objetos - 01/06/26

## Problema 1: El Sistema de Envíos Todopoderoso

### Debate de soluciones
- El `OrderService` original mezcla tres responsabilidades: cálculo de envío, procesamiento de pago y notificación.
- Aplicando SRP se separan estas responsabilidades en clases independientes:
  - `ShippingStrategy` para cálculo de envío.
  - `PaymentStrategy` para pago.
  - `NotificationService` para notificaciones.
- Aplicando OCP, `OrderService` no contiene `if/else` para nuevos métodos.
  - Nuevas estrategias de envío o pago pueden añadirse implementando la interfaz correspondiente.
  - El código existente no necesita modificarse para soportar rutas nuevas como "Entrega con Drones".

### Implementación
- `src/models/order.ts` define el modelo `Order`.
- `src/interfaces/*.ts` define las abstracciones de estrategia para envío, pago y notificación.
- `src/services/shipping/*.ts` encapsula cada método de envío.
- `src/services/payment/*.ts` encapsula cada método de pago.
- `src/services/notification/*.ts` encapsula la notificación por email.
- `src/services/order-service.ts` orquesta la operación aplicando SRP y OCP.
- `features/order_processing.feature` y `features/steps/order.steps.ts` validan el comportamiento con Cucumber.

### Cómo ejecutar
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Ejecutar pruebas Cucumber:
   ```bash
   npm run cucumber
   ```

### Resultado esperado
- El sistema delega envío, pago y notificación a elementos independientes.
- Se puede extender con nuevos métodos de envío o pago sin modificar `OrderService`.
