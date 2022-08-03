import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicePoint } from 'src/service-point/entities/service-point.entity';
import { Round } from './entities/round.entity';
import { RoundController } from './round.controller';
import { RoundService } from './round.service';

@Module({
  imports: [TypeOrmModule.forFeature([Round, ServicePoint])],
  controllers: [RoundController],
  providers: [RoundService]
})
export class RoundModule {}
