import { Repository } from 'typeorm';
import { Occurrence } from './entities/occorrence.entity';
export declare class OcorrenceService {
    private readonly occurrenceRepository;
    constructor(occurrenceRepository: Repository<Occurrence>);
}
