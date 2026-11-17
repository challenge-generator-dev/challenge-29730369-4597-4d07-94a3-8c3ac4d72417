import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponse {
  @ApiProperty({ example: 400, description: 'Código HTTP del error' })
  statusCode: number;

  @ApiProperty({
    example: 'Validation failed',
    description: 'Mensaje descriptivo del error',
  })
  message: string;

  @ApiProperty({
    example: 'Bad Request',
    description: 'Tipo de error según el estándar HTTP',
    required: false,
  })
  error?: string;

  @ApiProperty({
    example: ['startTime must be a valid ISO 8601 date', 'roomId must be a number'],
    description: 'Detalles específicos del error (opcional)',
    required: false,
    type: [String],
  })
  details?: string[];

  @ApiProperty({
    example: '2024-05-20T12:34:56.789Z',
    description: 'Marca de tiempo del error',
    required: false,
  })
  timestamp?: string;

  constructor(
    statusCode: number,
    message: string,
    error?: string,
    details?: string[],
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
    this.details = details;
    this.timestamp = new Date().toISOString();
  }

  static fromValidationError(details: string[]): ErrorResponse {
    return new ErrorResponse(
      400,
      'Validation failed',
      'Bad Request',
      details,
    );
  }

  static fromConflictError(message: string): ErrorResponse {
    return new ErrorResponse(
      409,
      message,
      'Conflict',
    );
  }

  static fromNotFoundError(message: string): ErrorResponse {
    return new ErrorResponse(
      404,
      message,
      'Not Found',
    );
  }

  static fromInternalError(): ErrorResponse {
    return new ErrorResponse(
      500,
      'Internal server error',
      'Internal Server Error',
    );
  }
}