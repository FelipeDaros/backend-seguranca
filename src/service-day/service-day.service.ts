import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Itens } from 'src/post/entities/itens.entity';
import { Users } from 'src/users/entities/user.entity';
import { getConnection, Repository } from 'typeorm';
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
    
    const serviceDay = this.serviceDayRepository.create({
      ...createServiceDayDto,
      itens
    });

    return await this.serviceDayRepository.save(serviceDay);
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

  public async findLatest(post_id: string): Promise<ServiceDay>{
    return await getConnection().query(`select distinct  i."name" as itens, sd.report_reading, u."name" from "service-day" sd join post p on p.id = sd.post_id join point_itens pi2 on pi2."postId" = p.id join itens i on i.id = pi2."itensId" join users u on sd.user_id = u.id where p.id = '${post_id}'`);
  }

  
  
}
