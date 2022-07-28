import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Occurrence } from './entities/occorrence.entity';

@Injectable()
export class OcorrenceService {
  constructor(
    @InjectRepository(Occurrence)
    private readonly occurrenceRepository: Repository<Occurrence>
  ){}
}
