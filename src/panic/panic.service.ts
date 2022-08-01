import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Panic } from './entities/panic.entity';
import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';
import { CreatePanicDto } from './dto/createPanicDto';
import { UpdatePanicDto } from './dto/updatePanicDto';

@Injectable()
export class PanicService {
  constructor(
    @InjectRepository(Panic)
    private readonly panicService: Repository<Panic>
  ){}

  async findAll(): Promise<Panic[]>{
    return await this.panicService.find();
  }

  async create(createPanicDto: CreatePanicDto): Promise<Panic>{
    console.log(createPanicDto)
    const panic = this.panicService.create({
      id: uuid(),
      user_id: createPanicDto.user_id,
      date: createPanicDto.date,
      stats: createPanicDto.stats
    });

    return this.panicService.save(panic);
  }

  async update(updatePanicDto: UpdatePanicDto){
    console.log(updatePanicDto)
    const panicFind = await this.panicService.findOne({
      where: {
        id: updatePanicDto.id  
      }
    });

    if(!panicFind){
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Alerta de pânico não encontrado'
      }, HttpStatus.BAD_REQUEST)
    }

    return await this.panicService.update(updatePanicDto.id, updatePanicDto);
  }
}
