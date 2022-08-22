import { Module } from '@nestjs/common';
import { ServicePointService } from './service-point.service';
import { ServicePointController } from './service-point.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicePoint } from './entities/service-point.entity';
import { Post } from 'src/post/entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServicePoint, Post])],
  providers: [ServicePointService],
  controllers: [ServicePointController]
})
export class ServicePointModule {}
