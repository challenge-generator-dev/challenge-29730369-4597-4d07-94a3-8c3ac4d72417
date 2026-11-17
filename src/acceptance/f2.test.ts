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