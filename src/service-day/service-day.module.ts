import { Module, Post } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Itens } from 'src/service-day/entities/itens.entity';
import { Users } from 'src/users/entities/user.entity';
import { ServiceDay } from './entities/service-day.entity';
import { ServiceDayController } from './service-day.controller';
import { ServiceDayService } from './service-day.service';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceDay, Users, Itens]), AuthModule],
  controllers: [ServiceDayController],
  providers: [ServiceDayService]
})
export class ServiceDayModule {}
