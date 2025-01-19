import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUseCase } from '../../../application/usecases/auth/register.usecase';
import { RegisterUserRequestDto } from './dto/register-user-request.dto';

@Controller('v1/auth')
export class AuthController {
  constructor(private readonly registerUseCase: RegisterUseCase) {}

  @Post('register')
  async register(@Body() user: RegisterUserRequestDto) {
    // this.registerUseCase.register();
  }
}
