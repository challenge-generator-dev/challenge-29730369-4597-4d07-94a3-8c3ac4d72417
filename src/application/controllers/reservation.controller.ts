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