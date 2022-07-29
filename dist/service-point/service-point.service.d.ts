import { Repository } from 'typeorm';
import { CreateServicePointDto } from './dto/CreateServicePointDto.entity';
import { ServicePoint } from './entities/service-point.entity';
export declare class ServicePointService {
    private readonly servicePointService;
    constructor(servicePointService: Repository<ServicePoint>);
    create(createServicePointDto: CreateServicePointDto): Promise<ServicePoint>;
    findAll(): Promise<ServicePoint[]>;
}
