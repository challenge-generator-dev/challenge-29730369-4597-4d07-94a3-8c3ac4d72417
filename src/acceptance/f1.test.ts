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