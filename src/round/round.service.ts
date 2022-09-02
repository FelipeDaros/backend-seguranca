import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  public async create(saveLocaleDto: SaveLocaleDto): Promise<Round>{
    const nameLocale = await this.servicePointRepository.findOne({
      where: {
        locale: saveLocaleDto.locale
      }
    });

    const local = this.roundRepository.create(saveLocaleDto);

    const latitudeMais = Number(nameLocale.latitude)*1.0001;
    const latitudeMenos = Number(nameLocale.latitude)*0.9999;

    const longitudeMais = Number(nameLocale.longitude)*1.0001;
    const longitudeMenos = Number(nameLocale.longitude)*0.9999;

    //

    console.log(longitudeMenos);
    console.log(saveLocaleDto.longitude)
    console.log(longitudeMais)

    if((saveLocaleDto.longitude >= longitudeMais && saveLocaleDto.longitude <= longitudeMenos) && (saveLocaleDto.latitude >= latitudeMais && saveLocaleDto.latitude <= latitudeMenos)){
      //console.log("Você está proxímo");
      return await this.roundRepository.save(local);
    }else{
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Você não está próximo ao ponto cadastrado!'
      }, HttpStatus.BAD_REQUEST);
    }
  }
}


//