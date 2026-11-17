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