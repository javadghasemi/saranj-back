import { ConflictException } from '@nestjs/common';

export class UserExistsException extends ConflictException {
  constructor() {
    super('ایمیل/شماره موبایل شما از قبل وجود دارد', 'UserExists');
    this.name = 'UserExistsException';
  }
}
