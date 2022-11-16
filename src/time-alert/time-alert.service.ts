import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

    public async listLatestAlertUser(user_id: string){
      const retorno = await this.timeAlertRepository.findOne({
        where: {
          user_id
        }
      }) 

      return retorno.latestAlert
    }


    public async findTimeAlertUser(user_id: string): Promise<Boolean>{
      const found = await this.timeAlertRepository.findOne({
        where: {
          user_id: user_id
        },
        order: {
          latestAlert: 'DESC'
        }
      })

      if(!found){
        throw new HttpException({
          status: HttpStatus.NOT_FOUND,
          error: 'Não há registros de um último alerta, acabamos de gerar o seu primeiro alerta!'
        }, HttpStatus.NOT_FOUND);
      }

      return true;
      //return await getConnection().query(`select * from "time-alert" ta join users u on u.id = ta.user_id where ta.user_id = '${user_id}' order by ta."latestAlert" desc limit 1`);
    }
}
