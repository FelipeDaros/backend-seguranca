import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Round } from 'src/round/entities/round.entity';
import { Itens } from 'src/service-day/entities/itens.entity';
import { ServicePoint } from 'src/service-point/entities/service-point.entity';
import { FindOperator, Repository } from 'typeorm';
import { CreatePostDto } from './dto/createPost-dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
 constructor(
  @InjectRepository(Post)
  private readonly postRepository: Repository<Post>,
  @InjectRepository(ServicePoint)
  private readonly servicePointRepository: Repository<ServicePoint>
 ){}

 public async create(createPostDto: CreatePostDto): Promise<Post>{
  const points = await Promise.all(
    createPostDto.points_post.map((iten) => this.preloadNameIten(iten))
  );

  const post = this.postRepository.create({
    ...createPostDto,
    points_post: points
  })

  return await this.postRepository.save(post);
 }

 public async findAll(): Promise<Post[]>{
  return await this.postRepository.find();
 }

 public async findAllItensInGuarita(name: string):Promise<Post | Post[]>{
  return await this.postRepository.find({
    where: name
  })
 }


 private async preloadNameIten(locale: string): Promise<ServicePoint>{
  const iten = await this.servicePointRepository.findOne({where: {locale}});

  if(iten){
    return iten;
  }

  return this.servicePointRepository.create({locale});
}
}
