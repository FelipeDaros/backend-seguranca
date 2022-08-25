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


    console.log(post);
    /*if(post.points_post){

      this.postService.update(post.id, {
        company_id: post.company_id,
        itens: post.itens,
        name: post.name,
        points_post: [
          ...post.points_post,
          pointCreate
        ]     
      })
    }*/
  
    

    //console.log(`QRCODE: `+qrcodeHash);

    if(pointAlreadyExists){
      throw new HttpException({
        status: HttpStatus.AMBIGUOUS,
        error: 'Ponto já cadastrado!'
      }, HttpStatus.AMBIGUOUS)
    }

    return this.servicePointService.save(pointCreate)
  }

  public async findAll(): Promise<ServicePoint[]>{
    return await this.servicePointService.find();
  }

  public async findAllPostCompany(company_id: string): Promise<ServicePoint[]>{
    const posts = await this.servicePointService.find({
      where: {
        company_id: company_id
      }
    });

    return posts;
  }
}
