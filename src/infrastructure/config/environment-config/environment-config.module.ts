import { join, resolve } from 'node:path';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentConfigService } from './environment-config.service';

console.log(resolve(join('env', 'local.env')));
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: resolve(join('env', 'local.env')),
      isGlobal: true,
    }),
  ],
  providers: [EnvironmentConfigService],
  exports: [EnvironmentConfigService],
})
export class EnvironmentConfigModule {}
