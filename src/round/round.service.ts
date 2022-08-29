import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServicePoint } from 'src/service-point/entities/service-point.entity';
import { Repository  } from 'typeorm';
import { SaveLocaleDto } from './dto/createRound.dto';
import { Round } from './entities/round.entity';

@Injectable()
export class RoundService {
  constructor(
    @InjectRepository(Round)
    private readonly roundRepository: Repository<Round>,
    @InjectRepository(ServicePoint)
    private readonly servicePointRepository: Repository<ServicePoint>
  ){}

  public async create(saveLocaleDto: SaveLocaleDto): Promise<void>{
    const nameLocale = await this.servicePointRepository.findOne({
      where: {
        locale: saveLocaleDto.locale
      }
    });
    
    //const local = this.roundRepository.create(saveLocaleDto);
    console.log(saveLocaleDto.latitude);
    console.log(saveLocaleDto.longitude);
    console.log(saveLocaleDto.locale);
    console.log(nameLocale.latitude);
    console.log(nameLocale.longitude);
    console.log(nameLocale.locale);

    const lati = Number(saveLocaleDto.latitude);
    const longi = Number(saveLocaleDto.longitude);

    var proximoLati = lati*1.0001;
    var proximoLongi = longi*1.0001;
    
    var calculoLatitude = Number(lati.toFixed(7)) - Number(proximoLati.toFixed(7));
    var calculoLongitude = Number(longi.toFixed(7)) - Number(proximoLongi.toFixed(7))

    /*if((Number(calculoLatitude.toFixed(7)) < 0.003 && Number(calculoLatitude.toFixed(7)) > 0.001) && (Number(calculoLongitude.toFixed(7)) < 0.006 && Number(calculoLongitude.toFixed(7)) > 0.001)){
      console.log("Próximo");
    }else{
      console.log("Distante");
    }*/
  }
}
