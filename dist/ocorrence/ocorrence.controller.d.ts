import { CreateOccorrenceDto } from './dto/create-occorrence.dto';
import { UpdateOccorrenceDto } from './dto/update-occorrence.dto';
import { OcorrenceService } from './ocorrence.service';
export declare class OcorrenceController {
    private readonly occorrenceService;
    constructor(occorrenceService: OcorrenceService);
    create(createOccorrenceDto: CreateOccorrenceDto): Promise<import("./entities/occorrence.entity").Occurrence>;
    findAll(): Promise<import("./entities/occorrence.entity").Occurrence[]>;
    update(id: string, updateOccorrenceDto: UpdateOccorrenceDto): Promise<import("typeorm").UpdateResult>;
}
