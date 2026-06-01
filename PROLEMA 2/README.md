Problema 2 — El Procesador de Documentos Rebelde

Objetivo: aplicar Liskov Substitution Principle (LSP) e Interface Segregation Principle (ISP).

Qué hice:
- Separé la interfaz monolítica en interfaces más pequeñas: `Openable`, `Editable`, `Savable` (ISP).
- `WordDocument` implementa las tres: puede abrir, editar y guardar.
- `ReadonlyPDF` solo implementa `Openable` (no fuerza a implementar `edit`/`save`).
- `processor.ts` expone dos funciones: `processEditable` (requiere `Openable & Editable & Savable`) y `viewOnly` (requiere `Openable`).

Resultado: ahora una `ReadonlyPDF` no rompe el programa porque no se le llama a `edit`/`save` desde funciones que sólo aceptan `Openable`.

Archivos:
- [PROLEMA 2/interfaces.ts](PROLEMA%202/interfaces.ts)
- [PROLEMA 2/word.ts](PROLEMA%202/word.ts)
- [PROLEMA 2/pdf.ts](PROLEMA%202/pdf.ts)
- [PROLEMA 2/processor.ts](PROLEMA%202/processor.ts)
- [PROLEMA 2/demo.ts](PROLEMA%202/demo.ts)

Cómo probar rápido (si tiene `ts-node`):

```bash
npm install -g ts-node typescript
ts-node "PROLEMA 2/demo.ts"
```

Debate sobre soluciones posibles
--------------------------------

- Opción 1 — Mantener una interfaz monolítica y usar checks en tiempo de ejecución: Simple pero frágil. Los objetos que no soportan ciertas operaciones deben lanzar errores o los clientes deben comprobar capacidades con `instanceof` o `in`. Viola LSP y conduce a fallos en runtime.

- Opción 2 — Segregar interfaces (ISP) — la que implementamos: dividir `DocumentHandler` en `Openable`, `Editable`, `Savable`. Los clientes declaran exactamente lo que necesitan (por ejemplo `Openable & Editable & Savable`), evitando llamadas a métodos no soportados. Cumple ISP y facilita LSP.

- Opción 3 — Diseño por composición y adaptadores: representar documentos con capacidades como objetos separados (por ejemplo `Editor` y `Viewer`) y componerlos en implementaciones. Útil para comportamientos dinámicos (ej. habilitar edición condicionada).

- Opción 4 — Null Object / Pattern de capacidad: crear objetos que implementan la interfaz pero no hacen nada o registran intentos. Puede ocultar errores y romper expectativas del cliente si no se documenta bien.

Recomendación: usar ISP + tipos estáticos (TypeScript) para que el compilador impida pasar objetos sin capacidad requerida. Complementar con adaptadores cuando se necesite combinar capacidades dinámicamente.

Pruebas automatizadas con Cucumber (BDD)
--------------------------------------

Incluyo un ejemplo mínimo de pruebas BDD usando Cucumber + TypeScript. El enlace con guía de referencia: https://daniel-delimata.medium.com/cucumber-in-the-typescript-a86bd03117a7

Archivos de prueba creados:
- `PROLEMA 2/features/document.feature` — escenarios de alto nivel.
- `PROLEMA 2/features/steps/document.steps.ts` — step definitions que instancian `WordDocument` y `ReadonlyPDF` y verifican el comportamiento.

Instalación y ejecución de tests:

```bash
cd "PROLEMA 2"
npm install
npm run test:cucumber
```

Notas: Si no desea instalar globalmente, el script `test:cucumber` usa `cucumber-js` en devDependencies y `ts-node/register` para ejecutar los steps TypeScript directamente.

