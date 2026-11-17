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