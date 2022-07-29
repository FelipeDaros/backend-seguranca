import { Repository } from 'typeorm';
import { CreateOccorrenceDto } from './dto/create-occorrence.dto';
import { UpdateOccorrenceDto } from './dto/update-occorrence.dto';
import { Occurrence } from './entities/occorrence.entity';
export declare class OcorrenceService {
    private readonly occurrenceRepository;
    constructor(occurrenceRepository: Repository<Occurrence>);
    findAll(): Promise<Occurrence[]>;
    update(id: string, updateOccorrenceDto: UpdateOccorrenceDto): Promise<import("typeorm").UpdateResult>;
    create(createOccorrenceDto: CreateOccorrenceDto): Promise<Occurrence>;
}
