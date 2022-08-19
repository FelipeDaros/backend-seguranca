import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Itens } from 'src/post/entities/itens.entity';
import { Post } from 'src/post/entities/post.entity';
import { Users } from 'src/users/entities/user.entity';
import { ServiceDay } from './entities/service-day.entity';
import { ServiceDayController } from './service-day.controller';
import { ServiceDayService } from './service-day.service';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceDay, Users, Itens, Post]), AuthModule],
  controllers: [ServiceDayController],
  providers: [ServiceDayService]
})
export class ServiceDayModule {}
