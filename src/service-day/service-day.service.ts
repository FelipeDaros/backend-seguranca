import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Itens } from 'src/post/entities/itens.entity';
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
  ){}

  public async create(createServiceDayDto: CreateServiceDayDto){
    
    const serviceDay = this.serviceDayRepository.create(createServiceDayDto);

    return await this.serviceDayRepository.save(serviceDay);
  }

  public async findAll(): Promise<ServiceDay[]>{
    return await this.serviceDayRepository.find({
      relations: ['itens']
    });
  }

  public async findAllLatest(): Promise<ServiceDay>{
    return await this.serviceDayRepository.findOne({
      relations: ['itens'],
      order: {
        created_at: 'DESC'
      }
    });
  }
  
}
