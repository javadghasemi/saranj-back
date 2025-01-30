import { Injectable } from '@nestjs/common';
import { AuthTokenPort } from '../../application/ports/auth-token.port';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthService implements AuthTokenPort {
  constructor(private readonly jwtService: JwtService) {
  }

  generateToken(payload: object): string {
    return this.jwtService.sign(payload);
  }

  verifyToken(token: string): object | null {
    return this.jwtService.verify(token);
  }
}
