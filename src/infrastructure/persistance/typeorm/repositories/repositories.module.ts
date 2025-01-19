import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from '../entities/address.entity';
import { UserEntity } from '../entities/user.entity';
import { ProductEntity } from '../entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, ProductEntity, AddressEntity]),
  ],
})
export class RepositoriesModule {}
