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