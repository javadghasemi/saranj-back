import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { EnvironmentConfigModule } from '../config/environment-config/environment-config.module';
import { EnvironmentConfigService } from '../config/environment-config/environment-config.service';
import { AuthTokenPort } from '../../application/ports/auth-token.port';
import { JwtAuthService } from './jwt.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: (environmentConfigService: EnvironmentConfigService) => ({
        secret: environmentConfigService.getJwtSecret(),
        signOptions: {
          expiresIn: environmentConfigService.getJwtExpirationTime(),
        },
      }),
    }),
  ],
  providers: [
    {
      provide: AuthTokenPort,
      useClass: JwtAuthService,
    },
  ],
  exports: [AuthTokenPort],
})
export class AuthModule {}
