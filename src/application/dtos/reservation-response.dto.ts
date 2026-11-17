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