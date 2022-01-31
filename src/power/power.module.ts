import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService], // by default private, not available in other modules
  exports: [PowerService], // enable `export`
})
export class PowerModule {}
