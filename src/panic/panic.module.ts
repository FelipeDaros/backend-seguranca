import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PanicController } from './panic.controller';
import { PanicService } from './panic.service';
import { Panic } from './entities/panic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Panic])],
  controllers: [PanicController],
  providers: [PanicService]
})
export class PanicModule {}
