import { Module } from '@nestjs/common';
import { OcorrenceService } from './ocorrence.service';
import { OcorrenceController } from './ocorrence.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Occurrence } from './entities/occorrence.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Occurrence])],
  providers: [OcorrenceService],
  controllers: [OcorrenceController]
})
export class OcorrenceModule {}
