import { Module } from '@nestjs/common';
import { ServicePointService } from './service-point.service';
import { ServicePointController } from './service-point.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicePoint } from './entities/service-point.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServicePoint])],
  providers: [ServicePointService],
  controllers: [ServicePointController]
})
export class ServicePointModule {}
