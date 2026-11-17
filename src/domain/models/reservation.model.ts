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