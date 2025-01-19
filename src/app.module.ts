import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { RepositoriesModule } from './infrastructure/persistance/typeorm/repositories/repositories.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
import { PersistenceModule } from './infrastructure/persistance/persistence.module';

@Module({
  imports: [
    EnvironmentConfigModule,
    RepositoriesModule,
    ControllersModule,
    PersistenceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
