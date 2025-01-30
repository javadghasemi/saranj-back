import { Injectable } from '@nestjs/common';
import { EncryptPort } from '../../ports/encrypt.port';
import { UserRepository } from '../../ports/user.repository';
import { InvalidCredentialsException } from '../../../domain/exceptions/invalid-credentials.exception';
import { AuthTokenPort } from '../../ports/auth-token.port';

@Injectable()
export class LoginUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly encryptService: EncryptPort,
    private readonly authToken: AuthTokenPort,
  ) {}

  public async execute(email: string, password: string) {
    const user = await this.userRepository.findOneByEmail(email);
    if (!user) {
      throw new InvalidCredentialsException();
    }

    if (!(await this.comparePassword(password, user.password))) {
      throw new InvalidCredentialsException();
    }

    return this.authToken.generateToken({ userId: user.id, email: user.email });
  }

  private comparePassword(password: string, hash: string): Promise<boolean> {
    return this.encryptService.compare(password, hash);
  }
}