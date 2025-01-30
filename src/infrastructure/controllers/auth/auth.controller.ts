import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUseCase } from '../../../application/usecases/auth/register.usecase';
import { RegisterUserRequestDto } from './dto/register-user-request.dto';
import { LoginUserRequestDto } from './dto/login-user-request.dto';
import { LoginUseCase } from '../../../application/usecases/auth/login.usecase';

@Controller('v1/auth')
export class AuthController {
  constructor(
    private readonly registerUseCase: RegisterUseCase,
    private readonly loginUseCase: LoginUseCase,
  ) {}

  @Post('register')
  async register(@Body() user: RegisterUserRequestDto) {
    const firstName = user.firstName;
    const lastName = user.lastName;
    const email = user.email;
    const mobileNumber = user.mobileNumber;
    const password = user.password;

    return this.registerUseCase.execute(
      firstName,
      lastName,
      mobileNumber,
      email,
      password,
    );
  }

  @Post('login')
  async login(@Body() user: LoginUserRequestDto) {
    const email = user.email;
    const password = user.password;

    return { token: await this.loginUseCase.execute(email, password) };
  }
}
