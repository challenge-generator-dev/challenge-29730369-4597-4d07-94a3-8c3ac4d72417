import { DataSource } from 'typeorm';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseClient implements OnModuleInit, OnModuleDestroy {
  private readonly dataSource: DataSource;

  constructor(private readonly configService: ConfigService) {
    this.dataSource = new DataSource({
      type: 'postgres',
      host: this.configService.get<string>('DB_HOST', 'localhost'),
      port: this.configService.get<number>('DB_PORT', 5432),
      username: this.configService.get<string>('DB_USERNAME', 'postgres'),
      password: this.configService.get<string>('DB_PASSWORD', 'postgres'),
      database: this.configService.get<string>('DB_NAME', 'reservations'),
      entities: [__dirname + '/../../domain/models/**/*.model{.ts,.js}'],
      synchronize: this.configService.get<boolean>('DB_SYNC', false),
      logging: this.configService.get<boolean>('DB_LOGGING', false),
    });
  }

  async onModuleInit(): Promise<void> {
    try {
      await this.dataSource.initialize();
      console.log('Database connection established');
    } catch (error) {
      console.error('Database connection failed', error);
      throw new Error('Failed to initialize database connection');
    }
  }

  async onModuleDestroy(): Promise<void> {
    try {
      await this.dataSource.destroy();
      console.log('Database connection closed');
    } catch (error) {
      console.error('Error closing database connection', error);
    }
  }

  getDataSource(): DataSource {
    if (!this.dataSource.isInitialized) {
      throw new Error('Database connection not initialized');
    }
    return this.dataSource;
  }

  async executeQuery<T>(query: string, parameters?: any[]): Promise<T[]> {
    try {
      return await this.dataSource.query(query, parameters);
    } catch (error) {
      console.error('Query execution failed', error);
      throw new Error('Database query failed');
    }
  }

  async checkRoomExists(roomId: number): Promise<boolean> {
    try {
      const result = await this.dataSource.query(
        'SELECT 1 FROM rooms WHERE id = $1',
        [roomId],
      );
      return result.length > 0;
    } catch (error) {
      console.error('Failed to check room existence', error);
      throw new Error('Database query failed');
    }
  }

  async getRoomCapacity(roomId: number): Promise<number> {
    try {
      const result = await this.dataSource.query(
        'SELECT capacity FROM rooms WHERE id = $1',
        [roomId],
      );
      if (result.length === 0) {
        throw new Error('Room not found');
      }
      return result[0].capacity;
    } catch (error) {
      console.error('Failed to get room capacity', error);
      throw new Error('Database query failed');
    }
  }
}