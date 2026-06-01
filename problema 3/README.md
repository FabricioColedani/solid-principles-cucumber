# Problema 3 — El Interruptor Rígido (DIP)

Se aplica el principio de Inversión de Dependencias (DIP). Ahora `Switch` depende de la abstracción `Switchable` en lugar de una implementación concreta.

Archivos principales:
- [problema 3/Device.ts](problema%203/Device.ts#L1) — interfaz `Switchable`.
- [problema 3/TraditionalBulb.ts](problema%203/TraditionalBulb.ts#L1) — implementación concreta.
- [problema 3/SmartLight.ts](problema%203/SmartLight.ts#L1) — otra implementación demostrativa.
- [problema 3/Switch.ts](problema%203/Switch.ts#L1) — ahora recibe el dispositivo por inyección de dependencias.
- [problema 3/index.ts](problema%203/index.ts#L1) — ejemplo de uso.

Ejecutar (rápido, requiere `ts-node`):

```bash
npx ts-node "problema 3/index.ts"
```

O compilar con `tsc` y ejecutar con `node`.

Diseño y pruebas (debate de soluciones)

- Opción A — Interface + DI (actual): crear una interfaz `Switchable` y pasar la dependencia al constructor de `Switch`. Ventajas: flexibilidad, testeable, cumple DIP. Inconveniente: requiere fábricas o wiring externo para composición.

- Opción B — Inversor de control / Contenedor (IoC): usar un contenedor para resolver las dependencias automáticamente. Ventajas: escalable para muchos dispositivos. Inconveniente: añade complejidad y dependencia del contenedor.

- Opción C — Patrón Estrategia con registro dinámico: `Switch` acepta una clave y busca la estrategia registrada. Ventaja: intercambios en tiempo de ejecución; Inconveniente: requiere registro central.

Decisión: Se eligió la Opción A (inyección explícita) por simplicidad y claridad pedagógica.

Pruebas automatizadas con Cucumber

Se añadieron pruebas de aceptación usando `@cucumber/cucumber`. Las features y pasos están en:
- [problema 3/features/switch.feature](problema%203/features/switch.feature#L1)
- [problema 3/features/steps/switch.steps.ts](problema%203/features/steps/switch.steps.ts#L1)

Referencia: https://daniel-delimata.medium.com/cucumber-in-the-typescript-a86bd03117a7

Ejecutar tests Cucumber:

```bash
npm install
npm run test:cucumber
```

