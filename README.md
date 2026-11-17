# Desarrollo de API REST para reservas de salas de reunión

El sistema debe permitir a los usuarios reservar salas de reunión, validando que no haya solapamientos en las reservas. Los usuarios pueden ser empleados de la empresa y las salas tienen una capacidad máxima de 10 personas. La API debe manejar errores como intentos de reservar una sala ya ocupada o superar la capacidad máxima.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | API de reservas de salas |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Stack

- **Lenguaje:** TypeScript
- **Framework:** NestJS 10
- **Version:** Node 22

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Tener el proyecto base del reto funcionando en tu máquina: clonar el repositorio, instalar las herramientas y verificar que compila y arranca antes de empezar a practicar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Instala las herramientas para ejecutar el proyecto: Node.js 18+ y npm.
- Clona el repositorio del reto (el enlace viene en la entrega del reto y en la sección "Repositorio del Proyecto" del PDF) y ábrelo en tu IDE.
- Instala las dependencias y compila ejecutando `npm install --no-audit --no-fund && npm run build` en la raíz del repositorio.
- Confirma que el comando termina sin errores: el proyecto arranca y sus pruebas corren.
- Ubica los archivos de práctica: son los que contienen `TODO(reto)` (búscalos en el repositorio). Lee el README.md y el AGENTS.md antes de empezar.

**Entregable:** El proyecto compila/arranca sin errores con `npm install --no-audit --no-fund && npm run build`.

<details>
<summary>Pistas de conocimiento</summary>

- Los archivos con `TODO(reto)` son el ejercicio: el resto del repositorio ya está resuelto y no hace falta tocarlo.
- Si el comando de verificación falla, revisa la versión de las herramientas instaladas antes de modificar código.
- AGENTS.md describe el reto, el comando de verificación y las reglas del repositorio.

</details>

### Fase 1: Definición de endpoints y modelo de datos

**Objetivo:** Establecer los endpoints necesarios y el modelo de datos para las reservas de salas.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Identificar los endpoints necesarios para crear, leer, actualizar y eliminar reservas de salas.
- Definir el modelo de datos para las reservas, incluyendo atributos como ID de la reserva, ID de la sala, fecha y hora de inicio y fin, y lista de asistentes.

**Entregable:** Documentación de los endpoints y modelo de datos.

<details>
<summary>Pistas de conocimiento</summary>

- Considera los métodos HTTP apropiados para cada operación.
- Piensa en cómo representar las relaciones entre las reservas y las salas.

</details>

### Fase 2: Implementación de la lógica de negocio

**Objetivo:** Implementar la lógica de negocio para validar las reservas y manejar los errores.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Desarrollar la lógica para validar que no haya solapamientos en las reservas.
- Implementar el manejo de errores para casos como intentos de reservar una sala ya ocupada o superar la capacidad máxima.

**Entregable:** Código implementado para la lógica de negocio y manejo de errores.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo verificar la disponibilidad de la sala antes de crear una nueva reserva.
- Piensa en diferentes estrategias para manejar los errores y proporcionar mensajes de respuesta adecuados.

</details>

### Fase 3: Pruebas y optimización

**Objetivo:** Realizar pruebas unitarias y de integración para asegurar la funcionalidad y optimizar el rendimiento.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementa pruebas unitarias para la lógica de negocio (p3) cubriendo todos los casos de aceptación, incluyendo errores y bordes.
- Implementa pruebas de integración para el endpoint de creación de reservas (p5) verificando la interacción con la lógica de negocio y el adaptador de salida.
- Optimiza la validación de solapamientos en la lógica de negocio (p3) para reducir la complejidad temporal (ej: usando índices o estructuras de datos eficientes).
- Documenta las optimizaciones realizadas en la validación de solapamientos, incluyendo métricas de rendimiento antes y después.

**Entregable:** Código de pruebas unitarias y de integración, junto con optimizaciones en la lógica de validación de solapamientos.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza frameworks de pruebas para escribir pruebas unitarias y de integración.
- Considera el uso de herramientas de profiling para identificar cuellos de botella.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los endpoints y el modelo de datos en el contexto de esta API?
- **paraQueSirve**: ¿Para qué sirve la lógica de negocio en la validación de reservas?
- **comoSeUsa**: ¿Cómo se usa el manejo de errores en esta API?
- **erroresComunes**: ¿Cuáles son los errores comunes que pueden ocurrir al reservar una sala y cómo se manejan?
- **queDecisionesImplica**: ¿Qué decisiones implica la optimización del rendimiento en esta API?

## Criterios de Evaluacion

- Definición correcta de endpoints y modelo de datos.
- Implementación adecuada de la lógica de negocio para validar reservas.
- Manejo correcto de errores en la API.
- Realización de pruebas unitarias y de integración.
- Identificación y optimización de posibles cuellos de botella en el rendimiento.

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

## Pruebas de aceptacion

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
