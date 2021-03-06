import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  imports: [PowerModule], // Connecting CPU Module to Power Module
  providers: [CpuService],
  exports: [CpuService],
})
export class CpuModule {}
