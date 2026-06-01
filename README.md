# Trabajo Práctico - Principios SOLID en TypeScript

## Descripción del repositorio

Este proyecto contiene tres ejercicios prácticos que demuestran la aplicación de los principios SOLID usando TypeScript y pruebas con Cucumber.

Cada problema está organizado en su propia carpeta (`Problema1`, `Problema2`, `Problema3`) y muestra una situación con diseño inicial defectuoso, seguida de una solución que mejora la calidad del código.

## Estructura del proyecto

- `Problema1/`: sistema de órdenes con envío, pago y notificaciones.
- `Problema2/`: procesador de documentos con manejo de capacidades específicas.
- `Problema3/`: implementación de un interruptor y dispositivos compatibles.

---

## Problema 1 - Sistema de envíos

### Problemas detectados

- `OrderService` tenía varias responsabilidades: calcular costos de envío, procesar pagos y enviar notificaciones.
- Se violaba el principio SRP, ya que un cambio en cualquiera de estos aspectos obligaba a modificar la misma clase.
- También se violaba el principio OCP: agregar nuevos métodos de pago o envío requería cambiar la lógica existente.

### Solución aplicada

- Separación de responsabilidades en interfaces y clases independientes.
- `ShippingMethod`, `PaymentMethod` y `NotificationService` manejan cada parte por separado.
- `OrderService` se enfoca únicamente en orquestar el flujo del pedido.

### Beneficios

- Menor acoplamiento entre componentes.
- Mejora de la mantenibilidad y la legibilidad.
- Fácil incorporación de nuevos métodos de pago, envío y notificación.

---

## Problema 2 - Procesador de documentos

### Problemas detectados

- La interfaz original de documentos exigía métodos que no todos los formatos podían implementar (`open`, `edit`, `save`).
- Esto contradecía el principio ISP, ya que los clientes quedaban forzados a depender de métodos no utilizados.
- También se generaban violaciones de LSP cuando un documento no podía cumplir todas las operaciones esperadas.

### Solución aplicada

- Se dividió la interfaz en responsabilidades más pequeñas: `Openable`, `Editable` y `Savable`.
- Cada formato de documento implementa sólo las capacidades que realmente soporta.

### Beneficios

- Interfaces más específicas y ajustadas a cada caso.
- Eliminación de métodos innecesarios o inservibles.
- Menor riesgo de errores en tiempo de ejecución.

---

## Problema 3 - Interruptor y dispositivos

### Problemas detectados

- La clase `Switch` dependía directamente de una implementación concreta (`TraditionalBulb`).
- Esto violaba el principio DIP, aumentando el acoplamiento y reduciendo la flexibilidad.

### Solución aplicada

- Se introdujo la abstracción `SwitchableDevice`.
- `Switch` recibe el dispositivo mediante inyección de dependencias.
- Nuevos dispositivos pueden integrarse sin modificar el interruptor.

### Beneficios

- Código más flexible y extensible.
- Mejora en la reutilización de componentes.
- Facilita las pruebas y reduce dependencias rígidas.

---

## Conclusión

La aplicación de los principios SOLID en estos ejemplos ayuda a construir soluciones más limpias, escalables y resistentes al cambio.

Estos principios son fundamentales para diseñar sistemas de software más mantenibles y fáciles de evolucionar.

---

## Uso recomendado

1. Abrir cada carpeta de problema por separado.
2. Revisar la implementación del código en `src/`.
3. Ejecutar las pruebas o los features de Cucumber definidos en `features/`.

> El README ha sido mejorado para ser claro, completo y profesional.
