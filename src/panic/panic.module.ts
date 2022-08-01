import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PanicController } from './panic.controller';
import { PanicService } from './panic.service';
import { Panic } from './entities/panic.entity';
import { Users } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Panic, Users])],
  controllers: [PanicController],
  providers: [PanicService]
})
export class PanicModule {}
