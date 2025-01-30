import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { RegisterUseCase } from '../../application/usecases/auth/register.usecase';
import { EncryptModule } from '../services/encrypt/encrypt.module';
import { LoginUseCase } from '../../application/usecases/auth/login.usecase';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [EncryptModule, AuthModule],
  controllers: [AuthController],
  providers: [RegisterUseCase, LoginUseCase],
})
export class ControllersModule {}
