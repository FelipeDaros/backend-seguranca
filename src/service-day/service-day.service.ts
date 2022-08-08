import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Itens } from 'src/service-day/entities/itens.entity';
import { Users } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateServiceDayDto } from './dto/create-service-day.dto';
import { ServiceDay } from './entities/service-day.entity';

@Injectable()
export class ServiceDayService {
  constructor(
    @InjectRepository(ServiceDay)
    private readonly serviceDayRepository: Repository<ServiceDay>,
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    @InjectRepository(Itens)
    private readonly itensRepository: Repository<Itens>
  ){}

  public async create(createServiceDayDto: CreateServiceDayDto){
    const itens = await Promise.all(
      createServiceDayDto.itens.map((itens) => this.preloadNameIten(itens))
    );
    
    const service = this.serviceDayRepository.create({
      ...createServiceDayDto,
      itens
    })

    return await this.serviceDayRepository.save(service);
  }

  public async findAll(): Promise<ServiceDay[]>{
    return await this.serviceDayRepository.find({
      relations: ['itens']
    });
  }


  private async preloadNameIten(name: string): Promise<Itens>{
    const iten = await this.itensRepository.findOne({where: {name}});

    if(iten){
      return iten;
    }

    return this.itensRepository.create({name});
  }
}
