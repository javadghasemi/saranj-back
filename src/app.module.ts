import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
import { PersistenceModule } from './infrastructure/persistance/persistence.module';
import { LoggerModule } from './infrastructure/logger/logger.module';

@Module({
  imports: [
    EnvironmentConfigModule,
    ControllersModule,
    PersistenceModule.register({ global: true, type: 'typeorm' }),
    LoggerModule,
  ],
})
export class AppModule {}
