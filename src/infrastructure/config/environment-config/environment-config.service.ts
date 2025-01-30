import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfigInterface } from '../../../domain/config/database.interface';

@Injectable()
export class EnvironmentConfigService implements DatabaseConfigInterface {
  constructor(private readonly configService: ConfigService) {}

  getDatabaseHost(): string {
    return this.configService.get<string>('POSTGRES_HOST');
  }

  getDatabasePort(): number {
    return this.configService.get<number>('POSTGRES_PORT');
  }

  getDatabaseUser(): string {
    return this.configService.get<string>('POSTGRES_USER');
  }

  getDatabasePassword(): string {
    return this.configService.get<string>('POSTGRES_PASSWORD');
  }

  getDatabaseName(): string {
    return this.configService.get<string>('POSTGRES_DATABASE');
  }

  getDatabaseSchema(): string {
    return this.configService.get<string>('POSTGRES_SCHEMA');
  }

  getDatabaseSync(): boolean {
    return this.configService.get<boolean>('DATABASE_SYNCHRONIZE');
  }

  getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }

  getJwtExpirationTime(): string {
    return this.configService.get<string>('JWT_EXPIRATION_TIME');
  }
}
