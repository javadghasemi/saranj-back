import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { EncryptPort } from '../../../application/ports/encrypt.port';

@Injectable()
export class EncryptService implements EncryptPort {
  private readonly SALT_ROUND = 10;

  hash(password: string): Promise<string> {
    return bcrypt.hash(password, this.SALT_ROUND);
  }

  compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
