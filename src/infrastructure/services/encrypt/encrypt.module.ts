import { Module } from '@nestjs/common';
import { EncryptService } from './encrypt.service';
import { EncryptPort } from '../../../application/ports/encrypt.port';

@Module({
  providers: [
    {
      provide: EncryptPort,
      useClass: EncryptService,
    },
  ],
  exports: [EncryptPort],
})
export class EncryptModule {}
