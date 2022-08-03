import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServicePoint } from 'src/service-point/entities/service-point.entity';
import { Users } from 'src/users/entities/user.entity';
import { Repository, SimpleConsoleLogger } from 'typeorm';
import { CreateRoundDto } from './dto/createRound.dto';
import { UpdateRoundStats } from './dto/updateRoundStats.dto';
import { Round } from './entities/round.entity';

@Injectable()
export class RoundService {
  constructor(
    @InjectRepository(Round)
    private readonly roundRepository: Repository<Round>,
    @InjectRepository(ServicePoint)
    private readonly serviceServicePoint: Repository<ServicePoint>
  ){}

  public async create(createRoundDto: CreateRoundDto): Promise<Round>{
    const round = this.roundRepository.create(createRoundDto);

    return await this.roundRepository.save(round);
  }

  public async findAllRoundsUser(user_id: string){
    const round = await this.roundRepository.find({
      where: user_id
    })
    return round
  }

  public async updateRoundStats(updateroundStats: UpdateRoundStats){
    const pointFind = await this.roundRepository.findOne(updateroundStats.id);
    const servicePointFind = await this.serviceServicePoint.findOne(pointFind.point_id);

    console.log(servicePointFind);

    const lati = Number(updateroundStats.latitude);
    const longi = Number(updateroundStats.longitude);

    var proximoLati = lati*1.0001;
    var proximoLongi = longi*1.0001;
    
    var calculoLatitude = Number(lati.toFixed(7)) - Number(proximoLati.toFixed(7));
    var calculoLongitude = Number(longi.toFixed(7)) - Number(proximoLongi.toFixed(7))

    if((Number(calculoLatitude.toFixed(7)) < 0.003 && Number(calculoLatitude.toFixed(7)) > 0.001) && (Number(calculoLongitude.toFixed(7)) < 0.006 && Number(calculoLongitude.toFixed(7)) > 0.001) &&
    (updateroundStats.locale === servicePointFind.locale)){
      console.log("Próximo");
    }else{
      console.log("Distante");
    }
    return;
  }
}
