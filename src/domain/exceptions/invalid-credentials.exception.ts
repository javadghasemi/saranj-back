import { UnauthorizedException } from '@nestjs/common';

export class InvalidCredentialsException extends UnauthorizedException {
  constructor() {
    super('نام کاربری/پسورد اشتباه است', 'InvalidCredentials');
    this.name = 'InvalidCredentialsException';
  }
}