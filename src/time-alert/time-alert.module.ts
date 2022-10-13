import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/company/entities/company.entity';
import { Users } from 'src/users/entities/user.entity';
import { TimeAlert } from './entities/timeAlert.entity';
import { TimeAlertController } from './time-alert.controller';
import { TimeAlertService } from './time-alert.service';

@Module({
  imports: [TypeOrmModule.forFeature([TimeAlert, Company, Users])],
  controllers: [TimeAlertController],
  providers: [TimeAlertService]
})
export class TimeAlertModule {}
