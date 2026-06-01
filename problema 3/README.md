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
