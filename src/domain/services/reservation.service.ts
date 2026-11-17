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