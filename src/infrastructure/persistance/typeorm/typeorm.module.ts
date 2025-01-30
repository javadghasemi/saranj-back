import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from '../../config/environment-config/environment-config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmModuleOptions } from '../../config/typeorm/typeorm.config';
import { EnvironmentConfigService } from '../../config/environment-config/environment-config.service';
import { UserRepository } from '../../../application/ports/user.repository';
import { TypeormUserRepository } from './repositories/typeorm-user.repository';
import { UserEntity } from './entities/user.entity';
import { AddressEntity } from './entities/address.entity';
import { ProductEntity } from './entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: getTypeOrmModuleOptions,
    }),
    TypeOrmModule.forFeature([UserEntity, AddressEntity, ProductEntity]),
    EnvironmentConfigModule,
  ],
  providers: [
    {
      provide: UserRepository,
      useClass: TypeormUserRepository,
    },
  ],
  exports: [UserRepository],
})
export class TypeormModule {}
