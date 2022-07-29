import { Users } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreatePointDto } from './dto/create-point.dto';
import { UserPoint } from './entities/user-point.entity';
export declare class PointsService {
    private readonly pointService;
    private readonly userService;
    constructor(pointService: Repository<UserPoint>, userService: Repository<Users>);
    createPoint(createPointDto: CreatePointDto): Promise<UserPoint>;
}
