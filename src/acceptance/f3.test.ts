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