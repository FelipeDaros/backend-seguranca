import { CreatePointDto } from './dto/create-point.dto';
import { PointsService } from './points.service';
export declare class PointsController {
    private readonly pointService;
    constructor(pointService: PointsService);
    create(createPointDto: CreatePointDto): Promise<import("./entities/user-point.entity").UserPoint>;
}
