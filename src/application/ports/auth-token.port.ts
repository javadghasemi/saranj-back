export abstract class AuthTokenPort {
  abstract generateToken(payload: object): string;
  abstract verifyToken(token: string): object | null;
}
