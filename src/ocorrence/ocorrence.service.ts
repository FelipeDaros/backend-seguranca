import { ArgumentMetadata, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOccorrenceDto } from './dto/create-occorrence.dto';
import { UpdateOccorrenceDto } from './dto/update-occorrence.dto';
import { Occurrence } from './entities/occorrence.entity';

@Injectable()
export class OcorrenceService {
  constructor(
    @InjectRepository(Occurrence)
    private readonly occurrenceRepository: Repository<Occurrence>
  ){}

  public async findAll(): Promise<Occurrence[]>{
    return await this.occurrenceRepository.find();
  }

  public async update(id: string, updateOccorrenceDto: UpdateOccorrenceDto){
    const findOccorrence = await this.occurrenceRepository.findOne(id);

    if(!findOccorrence){
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Usuário não encontrado'
      }, HttpStatus.NOT_FOUND);
    }

    return this.occurrenceRepository.update(id, updateOccorrenceDto);
  }

  public async create(createOccorrenceDto: CreateOccorrenceDto): Promise<Occurrence>{
    const occurrence = this.occurrenceRepository.create(createOccorrenceDto);

    return this.occurrenceRepository.save(occurrence);
  }

}
