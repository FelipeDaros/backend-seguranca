import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServicePointDto } from './dto/CreateServicePointDto';
import { ServicePoint } from './entities/service-point.entity';
import { toString as qr} from 'qrcode';
import { v4 as uuid } from 'uuid';
import { Post } from 'src/post/entities/post.entity';
import { FindAllPostCompanyDto } from './dto/FindAllPostCompany.dto';

@Injectable()
export class ServicePointService {
  constructor(
    @InjectRepository(ServicePoint)
    private readonly servicePointService: Repository<ServicePoint>,
    @InjectRepository(Post)
    private readonly postService: Repository<Post>
  ){}

  public async create(createServicePointDto: CreateServicePointDto): Promise<ServicePoint>{
    const pointService = this.servicePointService.create(createServicePointDto);
    const post = await this.postService.findOne({
      where: {
        company_id: createServicePointDto.company_id
      }
    });

    const pointAlreadyExists = await this.servicePointService.findOne({
      where: {
        locale: createServicePointDto.locale
      }
    })

    if(pointAlreadyExists){
      throw new HttpException({
        status: HttpStatus.AMBIGUOUS,
        error: 'Ponto já cadastrado!'
      }, HttpStatus.AMBIGUOUS)
    }

    const qrcodeHash = await qr(createServicePointDto.locale);

    const pointCreate = {
      id: uuid(),
      latitude: String(pointService.latitude),
      longitude: String(pointService.longitude),
      locale: pointService.locale,
      stats: 'A',
      qrcode: qrcodeHash,
      company_id: pointService.company_id
    }
    
    return this.servicePointService.save(pointCreate)
  }

  public async findAll(): Promise<ServicePoint[]>{
    return await this.servicePointService.find();
  }

  public async findAllPostCompany(id: string): Promise<ServicePoint[]>{
    const posts = await this.servicePointService.find({
      where: {
        company_id: id
      }
    });

    return posts;
  }

  public async findOne(id: string): Promise<ServicePoint>{
    const point = await this.servicePointService.findOne(id);

    return point;
  }
}
