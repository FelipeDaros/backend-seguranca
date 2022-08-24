import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlertDto } from './dto/createAlert.dto';
import { Alert } from './entities/alert.entity';

@Injectable()
export class AlertService {
  constructor(
    @InjectRepository(Alert)
    private readonly alertRepository: Repository<Alert>
  ){}

  public async create(createAlertDto: CreateAlertDto): Promise<Alert>{
    const alert = this.alertRepository.create(createAlertDto);

    return await this.alertRepository.save(alert); 
  }

  public async findAll():Promise<Alert[]>{
    return await this.alertRepository.find();
  }
}
