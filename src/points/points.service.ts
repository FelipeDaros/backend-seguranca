import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreatePointDto } from './dto/create-point.dto';
import { UserPoint } from './entities/user-point.entity';

@Injectable()
export class PointsService {
  constructor(
    @InjectRepository(UserPoint)
    private readonly pointService: Repository<UserPoint>,
    @InjectRepository(Users)
    private readonly userService: Repository<Users>
  ){}

  public async createPoint(createPointDto: CreatePointDto): Promise<UserPoint>{
    const point = await this.pointService.create(createPointDto);
    const userNotExists = await this.userService.findOne({
      where: {
        id: createPointDto.user_id
      }
    })
    
    if(!userNotExists){
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Usuário não encontrado!'
      }, HttpStatus.NOT_FOUND)
    }

    this.pointService.save(point);

    return point;
  }

  /*public async findAll(): Promise<UserPoint[]>{
    
  }*/
}
