import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { RegisterUseCase } from '../../application/usecases/auth/register.usecase';

@Module({
  controllers: [AuthController],
  providers: [RegisterUseCase],
  imports: [],
})
export class ControllersModule {}
