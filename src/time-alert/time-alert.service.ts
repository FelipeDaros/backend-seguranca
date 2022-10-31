import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, getConnection, Repository } from 'typeorm';
import { CreateTimeAlertDto } from './dto/CreateTimeAlert.dto';
import { TimeAlert } from './entities/timeAlert.entity';

@Injectable()
export class TimeAlertService {
  constructor(
    @InjectRepository(TimeAlert)
    private readonly timeAlertRepository: Repository<TimeAlert>
    ){}

    public async createTimeAlert(createTimeAlert:CreateTimeAlertDto): Promise<TimeAlert>{
      const timeAlert = this.timeAlertRepository.create(createTimeAlert);

      return await this.timeAlertRepository.save(timeAlert);
    }

    public async listLatestAlertUser(user_id: string): Promise<TimeAlert>{

      return await getConnection().query(`select * from "time-alert" ta where ta.user_id = '${user_id}' order by ta."latestAlert" desc limit 1`);
    }


    public async findTimeAlertUser(user_id: string): Promise<TimeAlert>{
      return await this.timeAlertRepository.findOne({
        where: {
          user_id: user_id
        },
        order: {
          latestAlert: 'DESC'
        }
      })
      //return await getConnection().query(`select * from "time-alert" ta join users u on u.id = ta.user_id where ta.user_id = '${user_id}' order by ta."latestAlert" desc limit 1`);
    }
}
