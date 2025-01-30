import { DynamicModule, Module } from '@nestjs/common';
import { TypeormModule } from './typeorm/typeorm.module';

interface DatabaseOptions {
  type: 'typeorm' | 'mongoose';
  global?: boolean;
}

@Module({})
export class PersistenceModule {
  static async register({
    global = false,
    type,
  }: DatabaseOptions): Promise<DynamicModule> {
    return {
      global,
      module: PersistenceModule,
      imports: [TypeormModule],
      exports: [TypeormModule],
    };
  }
}
