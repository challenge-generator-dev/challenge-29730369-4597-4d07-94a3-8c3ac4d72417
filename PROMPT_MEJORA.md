# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/domain/models/reservation.model.ts` — La pieza p1 (Modelado de datos con restricciones, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/application/controllers/reservation.controller.ts` — La pieza p2 (Diseño de endpoints REST, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/domain/services/reservation.service.ts` — La pieza p3 (Validación de reglas de negocio, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/infrastructure/repositories/reservation.repository.ts` — La pieza p4 (Acceso a datos para validación de solapamientos, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2

### Brecha de conocimiento
Construye una API REST de reservas de salas de reunion con validacion de solapamientos

### Reto
- Tema: API de reservas de salas
- Seniority: advanced-l2
- Tipo: practical
- Título: Desarrollo de API REST para reservas de salas de reunión
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Definición de endpoints y modelo de datos — objetivo: Establecer los endpoints necesarios y el modelo de datos para las reservas de salas. — entregable (NO resolver): Documentación de los endpoints y modelo de datos.
- Fase 2: Implementación de la lógica de negocio — objetivo: Implementar la lógica de negocio para validar las reservas y manejar los errores. — entregable (NO resolver): Código implementado para la lógica de negocio y manejo de errores.
- Fase 3: Pruebas y optimización — objetivo: Realizar pruebas unitarias y de integración para asegurar la funcionalidad y optimizar el rendimiento. — entregable (NO resolver): Código de pruebas unitarias y de integración, junto con optimizaciones en la lógica de validación de solapamientos.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "reto-nest",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "jest"
  },
  "dependencies": {
    "@nestjs/common": "10.4.22",
    "@nestjs/config": "4.0.4",
    "@nestjs/core": "10.4.22",
    "@nestjs/platform-express": "10.4.22",
    "@nestjs/swagger": "8.1.1",
    "@nestjs/typeorm": "12.0.3",
    "class-transformer": "0.5.1",
    "class-validator": "0.15.1",
    "pg": "8.23.1",
    "reflect-metadata": "0.2.2",
    "rxjs": "7.8.2",
    "typeorm": "1.1.3"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "typescript": "5.7.3",
    "jest": "29.7.0",
    "ts-jest": "29.2.5",
    "@types/jest": "29.5.14"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "types": [
      "node",
      "jest"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.spec.ts",
    "src/**/*.test.ts"
  ]
}

// === ARCHIVO: src/domain/schemas/error.schema.ts ===
import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponse {
  @ApiProperty({ example: 400, description: 'Código HTTP del error' })
  statusCode: number;

  @ApiProperty({
    example: 'Validation failed',
    description: 'Mensaje descriptivo del error',
  })
  message: string;

  @ApiProperty({
    example: 'Bad Request',
    description: 'Tipo de error según el estándar HTTP',
    required: false,
  })
  error?: string;

  @ApiProperty({
    example: ['startTime must be a valid ISO 8601 date', 'roomId must be a number'],
    description: 'Detalles específicos del error (opcional)',
    required: false,
    type: [String],
  })
  details?: string[];

  @ApiProperty({
    example: '2024-05-20T12:34:56.789Z',
    description: 'Marca de tiempo del error',
    required: false,
  })
  timestamp?: string;

  constructor(
    statusCode: number,
    message: string,
    error?: string,
    details?: string[],
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
    this.details = details;
    this.timestamp = new Date().toISOString();
  }

  static fromValidationError(details: string[]): ErrorResponse {
    return new ErrorResponse(
      400,
      'Validation failed',
      'Bad Request',
      details,
    );
  }

  static fromConflictError(message: string): ErrorResponse {
    return new ErrorResponse(
      409,
      message,
      'Conflict',
    );
  }

  static fromNotFoundError(message: string): ErrorResponse {
    return new ErrorResponse(
      404,
      message,
      'Not Found',
    );
  }

  static fromInternalError(): ErrorResponse {
    return new ErrorResponse(
      500,
      'Internal server error',
      'Internal Server Error',
    );
  }
}

// === ARCHIVO: src/domain/errors/validation.error.ts ===
import { HttpException, HttpStatus } from '@nestjs/common';

export class RoomNotFoundError extends HttpException {
  constructor(roomId: string) {
    super(`Room with id ${roomId} not found`, HttpStatus.NOT_FOUND);
  }
}

export class CapacityExceededError extends HttpException {
  constructor(requested: number, maximum: number) {
    super(
      `Capacity exceeded. Requested: ${requested}, Maximum: ${maximum}`,
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class OverlapError extends HttpException {
  constructor(roomId: string, startTime: Date, endTime: Date) {
    super(
      `Room ${roomId} is already reserved from ${startTime} to ${endTime}`,
      HttpStatus.CONFLICT,
    );
  }
}

export class InvalidDateRangeError extends HttpException {
  constructor(startTime: Date, endTime: Date) {
    super(
      `Invalid date range. Start (${startTime}) must be before end (${endTime})`,
      HttpStatus.BAD_REQUEST,
    );
  }
}

// === ARCHIVO: src/infrastructure/database/database.client.ts ===
import { DataSource } from 'typeorm';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseClient implements OnModuleInit, OnModuleDestroy {
  private readonly dataSource: DataSource;

  constructor(private readonly configService: ConfigService) {
    this.dataSource = new DataSource({
      type: 'postgres',
      host: this.configService.get<string>('DB_HOST', 'localhost'),
      port: this.configService.get<number>('DB_PORT', 5432),
      username: this.configService.get<string>('DB_USERNAME', 'postgres'),
      password: this.configService.get<string>('DB_PASSWORD', 'postgres'),
      database: this.configService.get<string>('DB_NAME', 'reservations'),
      entities: [__dirname + '/../../domain/models/**/*.model{.ts,.js}'],
      synchronize: this.configService.get<boolean>('DB_SYNC', false),
      logging: this.configService.get<boolean>('DB_LOGGING', false),
    });
  }

  async onModuleInit(): Promise<void> {
    try {
      await this.dataSource.initialize();
      console.log('Database connection established');
    } catch (error) {
      console.error('Database connection failed', error);
      throw new Error('Failed to initialize database connection');
    }
  }

  async onModuleDestroy(): Promise<void> {
    try {
      await this.dataSource.destroy();
      console.log('Database connection closed');
    } catch (error) {
      console.error('Error closing database connection', error);
    }
  }

  getDataSource(): DataSource {
    if (!this.dataSource.isInitialized) {
      throw new Error('Database connection not initialized');
    }
    return this.dataSource;
  }

  async executeQuery<T>(query: string, parameters?: any[]): Promise<T[]> {
    try {
      return await this.dataSource.query(query, parameters);
    } catch (error) {
      console.error('Query execution failed', error);
      throw new Error('Database query failed');
    }
  }

  async checkRoomExists(roomId: number): Promise<boolean> {
    try {
      const result = await this.dataSource.query(
        'SELECT 1 FROM rooms WHERE id = $1',
        [roomId],
      );
      return result.length > 0;
    } catch (error) {
      console.error('Failed to check room existence', error);
      throw new Error('Database query failed');
    }
  }

  async getRoomCapacity(roomId: number): Promise<number> {
    try {
      const result = await this.dataSource.query(
        'SELECT capacity FROM rooms WHERE id = $1',
        [roomId],
      );
      if (result.length === 0) {
        throw new Error('Room not found');
      }
      return result[0].capacity;
    } catch (error) {
      console.error('Failed to get room capacity', error);
      throw new Error('Database query failed');
    }
  }
}

// === ARCHIVO: src/domain/models/reservation.model.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
export interface Reservation {
  id: string;
  roomId: string;
  userId: string;
  startTime: Date;
  endTime: Date;
}

export interface Room {
  id: string;
  name: string;
  capacity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export type ValidReservation = Reservation & {
  startTime: Date & { __brand: 'future' };
  endTime: Date & { __brand: 'future' };
};

export type ReservationWithValidation = Reservation extends infer R
  ? R extends { startTime: Date; endTime: Date }
    ? R['endTime'] extends Date
      ? R['startTime'] extends Date
        ? Date extends R['startTime']
          ? never
          : R
        : never
      : never
    : never
  : never;

export interface CreateReservationInput {
  roomId: string;
  userId: string;
  startTime: string;
  endTime: string;
}

export function validateDateRange(startTime: Date, endTime: Date): boolean {
  throw new Error('TODO(reto): validateDateRange');
}

export function isValidReservation(input: CreateReservationInput): boolean {
  throw new Error('TODO(reto): isValidReservation');
}

// === ARCHIVO: src/application/controllers/reservation.controller.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  HttpException,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CreateReservationDto } from '../dtos/create-reservation.dto';
import { ReservationResponseDto } from '../dtos/reservation-response.dto';
import { ErrorResponse } from '../../domain/schemas/error.schema';
import { ReservationService } from '../../domain/services/reservation.service';
import { ValidationError } from '../../domain/errors/validation.error';

export const ReservationEndpoints = {
  createReservation: '/reservations',
  getReservation: '/reservations/:id',
  listReservations: '/reservations',
  updateReservation: '/reservations/:id',
  deleteReservation: '/reservations/:id',
} as const;

@ApiTags('Reservations')
@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Crear una nueva reserva de sala' })
  @ApiBody({ type: CreateReservationDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Reserva creada exitosamente',
    type: ReservationResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Datos de entrada inválidos',
    type: ErrorResponse,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'La sala ya está reservada en el horario solicitado',
    type: ErrorResponse,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Error interno del servidor',
    type: ErrorResponse,
  })
  async createReservation(
    @Body() createReservationDto: CreateReservationDto,
  ): Promise<ReservationResponseDto> {
    throw new Error('TODO(reto): createReservation');
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una reserva por ID' })
  @ApiParam({ name: 'id', description: 'ID de la reserva', type: String })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Reserva encontrada',
    type: ReservationResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Reserva no encontrada',
    type: ErrorResponse,
  })
  async getReservation(@Param('id') id: string): Promise<ReservationResponseDto> {
    throw new Error('TODO(reto): getReservation');
  }

  private validateDateRange(startTime: Date, endTime: Date): boolean {
    throw new Error('TODO(reto): validateDateRange');
  }
}

// === ARCHIVO: src/domain/services/reservation.service.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Injectable, Inject } from '@nestjs/common';
import { Reservation, CreateReservationInput } from '../models/reservation.model';
import { ValidationError } from '../errors/validation.error';
import { ReservationRepositoryAdapter } from '../../infrastructure/repositories/reservation.repository';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface ReservationRepositoryPort {
  findByRoomAndTime(
    roomId: string,
    startTime: Date,
    endTime: Date,
  ): Promise<Reservation[]>;
}

@Injectable()
export class ReservationService {
  constructor(
    @Inject(ReservationRepositoryAdapter)
    private readonly reservationRepository: ReservationRepositoryPort,
  ) {}

  async validateReservation(
    reservation: Reservation,
    existingReservations: Reservation[],
  ): Promise<ValidationResult> {
    throw new Error('TODO(reto): validateReservation');
  }

  private checkOverlap(
    newReservation: Reservation,
    existingReservations: Reservation[],
  ): boolean {
    const newStart = new Date(newReservation.startTime).getTime();
    const newEnd = new Date(newReservation.endTime).getTime();

    for (const existing of existingReservations) {
      const existingStart = new Date(existing.startTime).getTime();
      const existingEnd = new Date(existing.endTime).getTime();

      if (newStart < existingEnd && newEnd > existingStart) {
        return true;
      }
    }

    return false;
  }

  optimizeOverlapCheck(reservations: Reservation[]): (newReservation: Reservation) => boolean {
    throw new Error('TODO(reto): optimizeOverlapCheck');
  }

  async validateReservationOptimized(
    reservation: Reservation,
    existingReservations: Reservation[],
  ): Promise<ValidationResult> {
    const errors: string[] = [];

    const now = new Date();
    if (new Date(reservation.startTime) <= now) {
      errors.push('La fecha de inicio debe ser futura');
    }

    if (new Date(reservation.endTime) <= new Date(reservation.startTime)) {
      errors.push('La reserva debe tener una duración mayor a cero');
    }

    const optimizedCheck = this.optimizeOverlapCheck(existingReservations);
    const hasOverlap = optimizedCheck(reservation);

    if (hasOverlap) {
      errors.push('Solapamiento con reserva existente');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}

// === ARCHIVO: src/infrastructure/repositories/reservation.repository.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Injectable } from '@nestjs/common';
import { DatabaseClient } from '../database/database.client';
import { Reservation } from '../../domain/models/reservation.model';
import { ReservationRepositoryPort } from '../../domain/services/reservation.service';

export class ReservationRepositoryAdapter implements ReservationRepositoryPort {
  constructor(private readonly databaseClient: DatabaseClient) {}

  async findByRoomAndTime(
    roomId: string,
    startTime: Date,
    endTime: Date,
  ): Promise<Reservation[]> {
    throw new Error('TODO(reto): findByRoomAndTime');
  }

  async findByRoom(roomId: string): Promise<Reservation[]> {
    throw new Error('TODO(reto): findByRoom');
  }

  async save(reservation: Reservation): Promise<Reservation> {
    throw new Error('TODO(reto): save');
  }
}

// === ARCHIVO: src/acceptance/f1.test.ts ===
import { Reservation, Room, User, validateDateRange, isValidReservation, CreateReservationInput } from '../domain/models/reservation.model';
import { ReservationEndpoints } from '../application/controllers/reservation.controller';

describe('Fase 1: Definición de endpoints y modelo de datos', () => {
  describe('Pieza p1: Modelado de datos con restricciones', () => {
    describe('Modelo incluye campos obligatorios', () => {
      it('dado Se define el modelo de reservas, cuando Se revisa la estructura del modelo, entonces El modelo incluye id, roomId, userId, startTime y endTime', () => {
        const reservation: Reservation = {
          id: '123',
          roomId: 'room-1',
          userId: 'user-1',
          startTime: new Date('2025-01-15T10:00:00Z'),
          endTime: new Date('2025-01-15T12:00:00Z'),
        };

        expect(reservation).toHaveProperty('id');
        expect(reservation).toHaveProperty('roomId');
        expect(reservation).toHaveProperty('userId');
        expect(reservation).toHaveProperty('startTime');
        expect(reservation).toHaveProperty('endTime');
      });
    });

    describe('Restricción de fechas válidas', () => {
      it('dado Se define el modelo de reservas, cuando Se intenta crear una reserva con endTime <= startTime, entonces TypeScript rechaza la asignación con un error de tipo', () => {
        const startTime = new Date('2025-01-15T12:00:00Z');
        const endTime = new Date('2025-01-15T10:00:00Z');

        const isValid = validateDateRange(startTime, endTime);
        expect(isValid).toBe(false);
      });

      it('dado Se define el modelo de reservas, cuando Se intenta crear una reserva con endTime > startTime, entonces La validación pasa', () => {
        const startTime = new Date('2025-01-15T10:00:00Z');
        const endTime = new Date('2025-01-15T12:00:00Z');

        const isValid = validateDateRange(startTime, endTime);
        expect(isValid).toBe(true);
      });
    });

    describe('Modelo de sala incluye capacidad', () => {
      it('dado Se define el modelo de salas, cuando Se revisa la estructura del modelo, entonces El modelo incluye id, name y capacity', () => {
        const room: Room = {
          id: 'room-1',
          name: 'Sala de Juntas A',
          capacity: 10,
        };

        expect(room).toHaveProperty('id');
        expect(room).toHaveProperty('name');
        expect(room).toHaveProperty('capacity');
        expect(typeof room.capacity).toBe('number');
      });
    });

    describe('Modelo de usuario incluye email', () => {
      it('dado Se define el modelo de usuarios, cuando Se revisa la estructura del modelo, entonces El modelo incluye id, name y email', () => {
        const user: User = {
          id: 'user-1',
          name: 'Juan Pérez',
          email: 'juan.perez@empresa.com',
        };

        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('name');
        expect(user).toHaveProperty('email');
      });
    });
  });

  describe('Pieza p2: Diseño de endpoints REST', () => {
    describe('Endpoint de creación de reservas', () => {
      it('dado Se definen los endpoints, cuando Se revisa el endpoint POST /reservations, entonces El endpoint acepta un body con roomId, userId, startTime y endTime, y devuelve 201 Created', () => {
        expect(ReservationEndpoints.createReservation).toBe('/reservations');

        const validBody = {
          roomId: 'room-1',
          userId: 'user-1',
          startTime: '2025-01-15T10:00:00Z',
          endTime: '2025-01-15T12:00:00Z',
        };

        expect(validBody).toHaveProperty('roomId');
        expect(validBody).toHaveProperty('userId');
        expect(validBody).toHaveProperty('startTime');
        expect(validBody).toHaveProperty('endTime');
      });
    });

    describe('Endpoint de consulta de reserva', () => {
      it('dado Se definen los endpoints, cuando Se revisa el endpoint GET /reservations/:id, entonces El endpoint devuelve la reserva con código 200 OK o 404 Not Found si no existe', () => {
        expect(ReservationEndpoints.getReservation).toBe('/reservations/:id');
      });
    });

    describe('Manejo de errores para entradas inválidas', () => {
      it('dado Se definen los endpoints, cuando Se envía una reserva con fechas inválidas, entonces El endpoint devuelve 400 Bad Request con un mensaje de error descriptivo', () => {
        const invalidInput: CreateReservationInput = {
          roomId: 'room-1',
          userId: 'user-1',
          startTime: '2025-01-15T12:00:00Z',
          endTime: '2025-01-15T10:00:00Z',
        };

        const isValid = isValidReservation(invalidInput);
        expect(isValid).toBe(false);
      });
    });

    describe('Manejo de errores para solapamientos', () => {
      it('dado Se definen los endpoints, cuando Se intenta crear una reserva que solapa con otra existente, entonces El endpoint devuelve 409 Conflict con detalles del solapamiento', () => {
        const overlappingInput: CreateReservationInput = {
          roomId: 'room-1',
          userId: 'user-1',
          startTime: '2025-01-15T11:00:00Z',
          endTime: '2025-01-15T13:00:00Z',
        };

        const isValid = isValidReservation(overlappingInput);
        expect(isValid).toBe(true);
      });
    });
  });
});

// === ARCHIVO: src/acceptance/f2.test.ts ===
import { ReservationService, ValidationResult, ReservationRepositoryPort } from '../domain/services/reservation.service';
import { Reservation } from '../domain/models/reservation.model';

describe('Pieza p3 y p4: Validación de reglas de negocio y acceso a datos', () => {
  let reservationService: ReservationService;
  let mockRepository: jest.Mocked<ReservationRepositoryPort>;

  beforeEach(() => {
    mockRepository = {
      findByRoomAndTime: jest.fn(),
    };
    reservationService = new ReservationService(mockRepository);
  });

  describe('Reserva con fechas futuras válidas', () => {
    it('dado Una reserva con startTime y endTime en el futuro; cuando Se valida la reserva; entonces La validación pasa sin errores', async () => {
      const futureStart = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const futureEnd = new Date(futureStart.getTime() + 60 * 60 * 1000);

      const reservation: Reservation = {
        id: '1',
        roomId: 'room-1',
        userId: 'user-1',
        startTime: futureStart,
        endTime: futureEnd,
      };

      mockRepository.findByRoomAndTime.mockResolvedValue([]);

      const result: ValidationResult = await reservationService.validateReservation(
        reservation,
        [],
      );

      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
  });

  describe('Reserva con fecha en el pasado', () => {
    it('dado Una reserva con startTime en el pasado; cuando Se valida la reserva; entonces La validación falla con el error "La fecha de inicio debe ser futura"', async () => {
      const pastStart = new Date(Date.now() - 24 * 60 * 60 * 1000);
      const pastEnd = new Date(pastStart.getTime() + 60 * 60 * 1000);

      const reservation: Reservation = {
        id: '1',
        roomId: 'room-1',
        userId: 'user-1',
        startTime: pastStart,
        endTime: pastEnd,
      };

      const result: ValidationResult = await reservationService.validateReservation(
        reservation,
        [],
      );

      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('La fecha de inicio debe ser futura');
    });
  });

  describe('Reserva con solapamiento exacto', () => {
    it('dado Una reserva existente y una nueva con el mismo startTime y endTime; cuando Se valida la nueva reserva; entonces La validación falla con el error "Solapamiento con reserva existente"', async () => {
      const baseTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const existingReservation: Reservation = {
        id: 'existing-1',
        roomId: 'room-1',
        userId: 'user-1',
        startTime: baseTime,
        endTime: new Date(baseTime.getTime() + 60 * 60 * 1000),
      };

      const newReservation: Reservation = {
        id: 'new-1',
        roomId: 'room-1',
        userId: 'user-2',
        startTime: baseTime,
        endTime: new Date(baseTime.getTime() + 60 * 60 * 1000),
      };

      const result: ValidationResult = await reservationService.validateReservation(
        newReservation,
        [existingReservation],
      );

      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Solapamiento con reserva existente');
    });
  });

  describe('Reserva con solapamiento parcial', () => {
    it('dado Una reserva existente y una nueva que solapa parcialmente; cuando Se valida la nueva reserva; entonces La validación falla con el error "Solapamiento con reserva existente"', async () => {
      const baseTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const existingReservation: Reservation = {
        id: 'existing-1',
        roomId: 'room-1',
        userId: 'user-1',
        startTime: baseTime,
        endTime: new Date(baseTime.getTime() + 2 * 60 * 60 * 1000),
      };

      const newReservation: Reservation = {
        id: 'new-1',
        roomId: 'room-1',
        userId: 'user-2',
        startTime: new Date(baseTime.getTime() + 60 * 60 * 1000),
        endTime: new Date(baseTime.getTime() + 3 * 60 * 60 * 1000),
      };

      const result: ValidationResult = await reservationService.validateReservation(
        newReservation,
        [existingReservation],
      );

      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Solapamiento con reserva existente');
    });
  });

  describe('Reserva con duración cero', () => {
    it('dado Una reserva con startTime igual a endTime; cuando Se valida la reserva; entonces La validación falla con el error "La reserva debe tener una duración mayor a cero"', async () => {
      const futureTime = new Date(Date.now() + 24 * 60 * 60 * 1000);

      const reservation: Reservation = {
        id: '1',
        roomId: 'room-1',
        userId: 'user-1',
        startTime: futureTime,
        endTime: futureTime,
      };

      const result: ValidationResult = await reservationService.validateReservation(
        reservation,
        [],
      );

      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('La reserva debe tener una duración mayor a cero');
    });
  });

  describe('Búsqueda de reservas existentes', () => {
    it('dado Una sala con reservas existentes; cuando Se buscan reservas para un rango de tiempo específico; entonces Se devuelven todas las reservas que solapan con el rango', async () => {
      const { ReservationRepositoryAdapter } = require('../infrastructure/repositories/reservation.repository');
      const mockDatabaseClient = {
        getDataSource: jest.fn().mockReturnValue({
          getRepository: jest.fn().mockReturnValue({
            createQueryBuilder: jest.fn().mockReturnValue({
              where: jest.fn().mockReturnThis(),
              andWhere: jest.fn().mockReturnThis(),
              getMany: jest.fn().mockResolvedValue([
                { id: '1', roomId: 'room-1', userId: 'user-1', startTime: new Date(), endTime: new Date() },
              ]),
            }),
          }),
        }),
      };

      const repository = new ReservationRepositoryAdapter(mockDatabaseClient);
      const startTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);

      const result = await repository.findByRoomAndTime('room-1', startTime, endTime);

      expect(result).toHaveLength(1);
      expect(result[0].roomId).toBe('room-1');
    });
  });

  describe('Búsqueda sin reservas existentes', () => {
    it('dado Una sala sin reservas; cuando Se buscan reservas para un rango de tiempo; entonces Se devuelve una lista vacía', async () => {
      const { ReservationRepositoryAdapter } = require('../infrastructure/repositories/reservation.repository');
      const mockDatabaseClient = {
        getDataSource: jest.fn().mockReturnValue({
          getRepository: jest.fn().mockReturnValue({
            createQueryBuilder: jest.fn().mockReturnValue({
              where: jest.fn().mockReturnThis(),
              andWhere: jest.fn().mockReturnThis(),
              getMany: jest.fn().mockResolvedValue([]),
            }),
          }),
        }),
      };

      const repository = new ReservationRepositoryAdapter(mockDatabaseClient);
      const startTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);

      const result = await repository.findByRoomAndTime('room-1', startTime, endTime);

      expect(result).toHaveLength(0);
    });
  });

  describe('Error de persistencia', () => {
    it('dado El cliente de base de datos falla; cuando Se intenta buscar reservas; entonces Se lanza un error de negocio con el mensaje "Error al acceder a las reservas existentes"', async () => {
      const { ReservationRepositoryAdapter } = require('../infrastructure/repositories/reservation.repository');
      const mockDatabaseClient = {
        getDataSource: jest.fn().mockReturnValue({
          getRepository: jest.fn().mockReturnValue({
            createQueryBuilder: jest.fn().mockReturnValue({
              where: jest.fn().mockReturnThis(),
              andWhere: jest.fn().mockReturnThis(),
              getMany: jest.fn().mockRejectedValue(new Error('DB connection failed')),
            }),
          }),
        }),
      };

      const repository = new ReservationRepositoryAdapter(mockDatabaseClient);
      const startTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);

      await expect(repository.findByRoomAndTime('room-1', startTime, endTime))
        .rejects.toThrow('Error al acceder a las reservas existentes');
    });
  });

  describe('Búsqueda con rango de tiempo inválido', () => {
    it('dado Un rango de tiempo con endTime <= startTime; cuando Se intenta buscar reservas; entonces Se lanza un error de negocio con el mensaje "Rango de tiempo inválido"', async () => {
      const { ReservationRepositoryAdapter } = require('../infrastructure/repositories/reservation.repository');
      const mockDatabaseClient = {
        getDataSource: jest.fn(),
      };

      const repository = new ReservationRepositoryAdapter(mockDatabaseClient);
      const startTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const endTime = startTime;

      await expect(repository.findByRoomAndTime('room-1', startTime, endTime))
        .rejects.toThrow('Rango de tiempo inválido');
    });
  });
});

// === ARCHIVO: src/acceptance/f3.test.ts ===
import { ReservationService } from '../domain/services/reservation.service';
import { Reservation } from '../domain/models/reservation.model';

describe('Pieza p5 y p6: Optimización de algoritmos de validación', () => {
  let reservationService: ReservationService;

  beforeEach(() => {
    reservationService = new ReservationService({} as any);
  });

  describe('Validación de solapamiento con optimización', () => {
    it('dado 1000 reservas existentes y una nueva reserva que no solapa; cuando Se valida la nueva reserva; entonces La validación devuelve false (sin solapamiento) en menos de 10ms', async () => {
      const baseTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
      
      const existingReservations: Reservation[] = Array.from({ length: 1000 }, (_, i) => ({
        id: `existing-${i}`,
        roomId: 'room-1',
        userId: `user-${i}`,
        startTime: new Date(baseTime.getTime() + i * 60 * 60 * 1000),
        endTime: new Date(baseTime.getTime() + (i + 1) * 60 * 60 * 1000),
      }));

      const newReservation: Reservation = {
        id: 'new-1',
        roomId: 'room-1',
        userId: 'user-new',
        startTime: new Date(baseTime.getTime() + 2000 * 60 * 60 * 1000),
        endTime: new Date(baseTime.getTime() + 2001 * 60 * 60 * 1000),
      };

      const optimizedCheck = reservationService.optimizeOverlapCheck(existingReservations);

      const start = performance.now();
      const hasOverlap = optimizedCheck(newReservation);
      const end = performance.now();

      expect(hasOverlap).toBe(false);
      expect(end - start).toBeLessThan(10);
    });
  });

  describe('Validación de solapamiento exacto con optimización', () => {
    it('dado 1000 reservas existentes y una nueva reserva que solapa exactamente con una existente; cuando Se valida la nueva reserva; entonces La validación devuelve true (solapamiento) en menos de 10ms', async () => {
      const baseTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
      
      const existingReservations: Reservation[] = Array.from({ length: 1000 }, (_, i) => ({
        id: `existing-${i}`,
        roomId: 'room-1',
        userId: `user-${i}`,
        startTime: new Date(baseTime.getTime() + i * 60 * 60 * 1000),
        endTime: new Date(baseTime.getTime() + (i + 1) * 60 * 60 * 1000),
      }));

      const targetIndex = 500;
      const newReservation: Reservation = {
        id: 'new-1',
        roomId: 'room-1',
        userId: 'user-new',
        startTime: new Date(baseTime.getTime() + targetIndex * 60 * 60 * 1000),
        endTime: new Date(baseTime.getTime() + (targetIndex + 1) * 60 * 60 * 1000),
      };

      const optimizedCheck = reservationService.optimizeOverlapCheck(existingReservations);

      const start = performance.now();
      const hasOverlap = optimizedCheck(newReservation);
      const end = performance.now();

      expect(hasOverlap).toBe(true);
      expect(end - start).toBeLessThan(10);
    });
  });

  describe('Validación de solapamiento parcial con optimización', () => {
    it('dado 1000 reservas existentes y una nueva reserva que solapa parcialmente con una existente; cuando Se valida la nueva reserva; entonces La validación devuelve true (solapamiento) en menos de 10ms', async () => {
      const baseTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
      
      const existingReservations: Reservation[] = Array.from({ length: 1000 }, (_, i) => ({
        id: `existing-${i}`,
        roomId: 'room-1',
        userId: `user-${i}`,
        startTime: new Date(baseTime.getTime() + i * 60 * 60 * 1000),
        endTime: new Date(baseTime.getTime() + (i + 1) * 60 * 60 * 1000),
      }));

      const targetIndex = 500;
      const newReservation: Reservation = {
        id: 'new-1',
        roomId: 'room-1',
        userId: 'user-new',
        startTime: new Date(baseTime.getTime() + (targetIndex - 0.5) * 60 * 60 * 1000),
        endTime: new Date(baseTime.getTime() + (targetIndex + 0.5) * 60 * 60 * 1000),
      };

      const optimizedCheck = reservationService.optimizeOverlapCheck(existingReservations);

      const start = performance.now();
      const hasOverlap = optimizedCheck(newReservation);
      const end = performance.now();

      expect(hasOverlap).toBe(true);
      expect(end - start).toBeLessThan(10);
    });
  });

  describe('Validación sin solapamiento con optimización', () => {
    it('dado 1000 reservas existentes ordenadas por startTime y una nueva reserva fuera de rango; cuando Se valida la nueva reserva; entonces La validación devuelve false (sin solapamiento) en menos de 5ms', async () => {
      const baseTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
      
      const existingReservations: Reservation[] = Array.from({ length: 1000 }, (_, i) => ({
        id: `existing-${i}`,
        roomId: 'room-1',
        userId: `user-${i}`,
        startTime: new Date(baseTime.getTime() + i * 60 * 60 * 1000),
        endTime: new Date(baseTime.getTime() + (i + 1) * 60 * 60 * 1000),
      }));

      const newReservation: Reservation = {
        id: 'new-1',
        roomId: 'room-1',
        userId: 'user-new',
        startTime: new Date(baseTime.getTime() + 1500 * 60 * 60 * 1000),
        endTime: new Date(baseTime.getTime() + 1501 * 60 * 60 * 1000),
      };

      const optimizedCheck = reservationService.optimizeOverlapCheck(existingReservations);

      const start = performance.now();
      const hasOverlap = optimizedCheck(newReservation);
      const end = performance.now();

      expect(hasOverlap).toBe(false);
      expect(end - start).toBeLessThan(5);
    });
  });
});

// === ARCHIVO: src/application/dtos/create-reservation.dto.ts ===
import { IsString, IsNotEmpty, IsDateString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReservationDto {
  @ApiProperty({
    example: 'room-123',
    description: 'ID único de la sala a reservar',
  })
  @IsString()
  @IsNotEmpty()
  roomId: string;

  @ApiProperty({
    example: 'user-456',
    description: 'ID único del usuario que realiza la reserva',
  })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({
    example: '2024-06-15T10:00:00.000Z',
    description: 'Fecha y hora de inicio de la reserva en formato ISO 8601',
  })
  @IsDateString()
  startTime: string;

  @ApiProperty({
    example: '2024-06-15T11:00:00.000Z',
    description: 'Fecha y hora de fin de la reserva en formato ISO 8601',
  })
  @IsDateString()
  endTime: string;
}

// === ARCHIVO: src/application/dtos/reservation-response.dto.ts ===
import { ApiProperty } from '@nestjs/swagger';
import { Reservation } from '../../domain/models/reservation.model';

export class ReservationResponseDto {
  @ApiProperty({
    example: 'res-789',
    description: 'ID único de la reserva',
  })
  id: string;

  @ApiProperty({
    example: 'room-123',
    description: 'ID de la sala reservada',
  })
  roomId: string;

  @ApiProperty({
    example: 'user-456',
    description: 'ID del usuario que realizó la reserva',
  })
  userId: string;

  @ApiProperty({
    example: '2024-06-15T10:00:00.000Z',
    description: 'Fecha y hora de inicio de la reserva',
  })
  startTime: Date;

  @ApiProperty({
    example: '2024-06-15T11:00:00.000Z',
    description: 'Fecha y hora de fin de la reserva',
  })
  endTime: Date;

  static fromReservation(reservation: Reservation): ReservationResponseDto {
    const dto = new ReservationResponseDto();
    dto.id = reservation.id;
    dto.roomId = reservation.roomId;
    dto.userId = reservation.userId;
    dto.startTime = reservation.startTime;
    dto.endTime = reservation.endTime;
    return dto;
  }
}

// === ARCHIVO: src/main.ts ===
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Reservation API')
    .setDescription('API for meeting room reservations')
    .setVersion('1.0')
    .addTag('reservations')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger documentation: http://localhost:${port}/api`);
}

bootstrap();

// === ARCHIVO: src/app.module.ts ===
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationController } from './application/controllers/reservation.controller';
import { ReservationService } from './domain/services/reservation.service';
import { ReservationRepositoryAdapter } from './infrastructure/repositories/reservation.repository';
import { DatabaseClient } from './infrastructure/database/database.client';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get('DB_USERNAME', 'postgres'),
        password: configService.get('DB_PASSWORD', 'postgres'),
        database: configService.get('DB_NAME', 'reservations'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: configService.get('NODE_ENV') !== 'production',
        logging: configService.get('NODE_ENV') === 'development',
      }),
    }),
  ],
  controllers: [ReservationController],
  providers: [
    ReservationService,
    ReservationRepositoryAdapter,
    DatabaseClient,
  ],
})
export class AppModule {}
```
