# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Desarrollo de API REST para reservas de salas de reunión**.

| | |
|---|---|
| Tema | API de reservas de salas |
| Nivel | advanced-l2 |
| Chapter | Backend |
| Especialidad | Node |
| Stack | TypeScript / NestJS 10 |
| Patron arquitectonico | hexagonal/clean |
| Tiempo estimado | 8 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json y tsconfig.json en la raiz`
- `src/main.ts como bootstrap`
- `modulo raiz de Nest`
- `src/domain con entidades y puertos`
- `src/application con casos de uso`
- `src/infrastructure con repositorios y controller`

Trampas conocidas:

- No inventes versiones de npm. Usa rango con caret (`^5.7.2`) sobre una version que exista, o deja que el paquete la resuelva. Una version inexistente (ej. `@types/react-router-dom@6.19.0`) hace fallar `npm install` con ETARGET y el proyecto no instala.
- Los paquetes `@types/*` solo hacen falta para librerias que no traen sus propios tipos. React Router, NestJS y Prisma ya los traen: agregar `@types/` de esos rompe o sobra.
- El `tsconfig.json` es obligatorio: sin el, `tsc` no sabe que compilar.

Dependencias:

- @nestjs/common 10.4.22
- @nestjs/config 4.0.4
- @nestjs/core 10.4.22
- @nestjs/platform-express 10.4.22
- @nestjs/swagger 8.1.1
- @nestjs/typeorm 12.0.3
- class-transformer 0.5.1
- class-validator 0.15.1
- pg 8.23.1
- reflect-metadata 0.2.2
- rxjs 7.8.2
- typeorm 1.1.3
- @types/express 4.17.25
- @types/node 22.20.5
- typescript 5.7.3
- jest 29.7.0
- ts-jest 29.2.5
- @types/jest 29.5.14

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install --no-audit --no-fund && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install --no-audit --no-fund && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Definición de endpoints y modelo de datos**: Documentación de los endpoints y modelo de datos.
- **Fase 2 — Implementación de la lógica de negocio**: Código implementado para la lógica de negocio y manejo de errores.
- **Fase 3 — Pruebas y optimización**: Código de pruebas unitarias y de integración, junto con optimizaciones en la lógica de validación de solapamientos.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `src/domain/models/reservation.model.ts` — La pieza p1 (Modelado de datos con restricciones, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/application/controllers/reservation.controller.ts` — La pieza p2 (Diseño de endpoints REST, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/domain/services/reservation.service.ts` — La pieza p3 (Validación de reglas de negocio, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/infrastructure/repositories/reservation.repository.ts` — La pieza p4 (Acceso a datos para validación de solapamientos, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).

## Mapa de fases

La **Fase 0** es clonar el repositorio, instalar dependencias y correr las pruebas de aceptacion: todas fallan porque la logica de cada pieza esta pendiente.

| Fase | Pieza (skill) | Archivo:simbolo | Criterios | Prueba | Comando |
|------|---------------|-----------------|-----------|--------|---------|
| f1 — Definición de endpoints y modelo de datos | Modelado de datos con restricciones | `src/domain/models/reservation.model.ts:ReservationModel` | Los endpoints REST están documentados con métodos HTTP, rutas, request/response bodies y códigos de estado esperados.; El modelo de datos incluye entidades para salas, reservas y usuarios con sus relaciones y restricciones.; Se definen casos de error para entradas inválidas (ej: fechas en pasado, salas inexistentes).; Se especifica cómo se manejarán los solapamientos de reservas. | `src/acceptance/f1.test.ts` | `npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f1.test.ts` |
| f1 — Definición de endpoints y modelo de datos | Diseño de endpoints REST | `src/application/controllers/reservation.controller.ts:ReservationEndpoints` | Los endpoints REST están documentados con métodos HTTP, rutas, request/response bodies y códigos de estado esperados.; El modelo de datos incluye entidades para salas, reservas y usuarios con sus relaciones y restricciones.; Se definen casos de error para entradas inválidas (ej: fechas en pasado, salas inexistentes).; Se especifica cómo se manejarán los solapamientos de reservas. | `src/acceptance/f1.test.ts` | `npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f1.test.ts` |
| f2 — Implementación de la lógica de negocio | Validación de reglas de negocio | `src/domain/services/reservation.service.ts:ReservationService.validateReservation` | La lógica de negocio valida que las fechas de reserva sean futuras y que la sala exista.; La lógica detecta solapamientos entre reservas existentes y la nueva reserva.; Los errores de validación devuelven mensajes descriptivos y códigos de estado apropiados.; La lógica maneja casos borde como reservas en el mismo instante o con duración cero. | `src/acceptance/f2.test.ts` | `npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f2.test.ts` |
| f2 — Implementación de la lógica de negocio | Acceso a datos para validación de solapamientos | `src/infrastructure/repositories/reservation.repository.ts:ReservationRepositoryAdapter` | La lógica de negocio valida que las fechas de reserva sean futuras y que la sala exista.; La lógica detecta solapamientos entre reservas existentes y la nueva reserva.; Los errores de validación devuelven mensajes descriptivos y códigos de estado apropiados.; La lógica maneja casos borde como reservas en el mismo instante o con duración cero. | `src/acceptance/f2.test.ts` | `npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f2.test.ts` |
| f3 — Pruebas y optimización | Integración de endpoints con lógica de negocio | `src/application/controllers/reservation.controller.ts:ReservationController.createReservation` | Las pruebas unitarias cubren todos los casos de aceptación de la lógica de negocio, incluyendo errores y bordes.; Las pruebas de integración verifican la creación de reservas, incluyendo la validación de solapamientos y manejo de errores.; La validación de solapamientos está optimizada para manejar un alto volumen de reservas existentes (ej: complejidad O(n) o mejor).; Se documentan las optimizaciones realizadas, con métricas de rendimiento y justificación de los cambios. | `src/acceptance/f3.test.ts` | `npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f3.test.ts` |
| f3 — Pruebas y optimización | Optimización de algoritmos de validación | `src/domain/services/reservation.service.ts:ReservationService.optimizeOverlapCheck` | Las pruebas unitarias cubren todos los casos de aceptación de la lógica de negocio, incluyendo errores y bordes.; Las pruebas de integración verifican la creación de reservas, incluyendo la validación de solapamientos y manejo de errores.; La validación de solapamientos está optimizada para manejar un alto volumen de reservas existentes (ej: complejidad O(n) o mejor).; Se documentan las optimizaciones realizadas, con métricas de rendimiento y justificación de los cambios. | `src/acceptance/f3.test.ts` | `npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f3.test.ts` |

## Pruebas de aceptacion y ubicacion de la logica

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

La logica de cada pieza va en su archivo; no la muevas a otro.

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (16)

- `package.json`
- `tsconfig.json`
- `src/domain/schemas/error.schema.ts`
- `src/domain/errors/validation.error.ts`
- `src/infrastructure/database/database.client.ts`
- `src/domain/models/reservation.model.ts`
- `src/application/controllers/reservation.controller.ts`
- `src/domain/services/reservation.service.ts`
- `src/infrastructure/repositories/reservation.repository.ts`
- `src/acceptance/f1.test.ts`
- `src/acceptance/f2.test.ts`
- `src/acceptance/f3.test.ts`
- `src/application/dtos/create-reservation.dto.ts`
- `src/application/dtos/reservation-response.dto.ts`
- `src/main.ts`
- `src/app.module.ts`

### Capas del patron declarado

Son las capas que la propuesta arquitectonica plantea, marcadas segun existan hoy en el repo. Orientan donde poner el codigo nuevo; no son una condicion para compilar.

- `src/domain/models` (presente)
- `src/domain/ports` (ausente)
- `src/domain/services` (presente)
- `src/application/controllers` (presente)
- `src/application/dtos` (presente)
- `src/infrastructure/repositories` (presente)
- `src/infrastructure/database` (presente)
- `src/common/exceptions` (ausente)
- `src/common/validators` (ausente)
- `test/unit` (ausente)
- `test/integration` (ausente)

## Verificacion

```bash
npm install --no-audit --no-fund && npm run build
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **hexagonal/clean**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2
- Brecha que el reto ataca: Construye una API REST de reservas de salas de reunion con validacion de solapamientos

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
