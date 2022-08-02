import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationDto } from './dto/createLocation.dto';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>
  ){}

  async findAll(): Promise<Location[]>{
    return await this.locationRepository.find();
  }

  async create(createLocationDto: CreateLocationDto):Promise<Location>{
    const location = this.locationRepository.create(createLocationDto);

    return this.locationRepository.save(location);
  }
}
