import { CreateServicePointDto } from './dto/CreateServicePointDto.entity';
import { ServicePointService } from './service-point.service';
export declare class ServicePointController {
    private readonly servicePointService;
    constructor(servicePointService: ServicePointService);
    create(createServicePointDto: CreateServicePointDto): Promise<import("./entities/service-point.entity").ServicePoint>;
    findAll(): Promise<import("./entities/service-point.entity").ServicePoint[]>;
}
