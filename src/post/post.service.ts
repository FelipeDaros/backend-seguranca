import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Itens } from 'src/post/entities/itens.entity';
import { ServicePoint } from 'src/service-point/entities/service-point.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/createPost-dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
 constructor(
  @InjectRepository(Post)
  private readonly postRepository: Repository<Post>,
  @InjectRepository(ServicePoint)
  private readonly servicePointRepository: Repository<ServicePoint>,
  @InjectRepository(Itens)
  private readonly itensRepository: Repository<Itens>
 ){}

 public async create(createPostDto: CreatePostDto): Promise<Post>{
  const points = await Promise.all(
    createPostDto.points_post.map((iten) => this.preloadLocale(iten))
  );

  const itens = await Promise.all(
    createPostDto.itens.map((itens) => this.preloadNameIten(itens))
  );

  const postAlreadyExists = await this.postRepository.findOne({
    where:{
      name: createPostDto.name   
    }
  })

  if(postAlreadyExists){
    throw new HttpException({
      status: HttpStatus.AMBIGUOUS,
      error: 'Posto já cadastrado!'
    }, HttpStatus.AMBIGUOUS)
  }

  const post = this.postRepository.create({
    ...createPostDto,
    points_post: points,
    itens: itens
  })
  

  return await this.postRepository.save(post);
 }

 public async findAll(): Promise<Post[]>{
  return await this.postRepository.find();
 }

 private async preloadLocale(locale: string): Promise<ServicePoint>{
  const iten = await this.servicePointRepository.findOne({where: {locale}});

  if(iten){
    return iten;
  }

  return this.servicePointRepository.create({locale});
  }

  private async preloadNameIten(name: string): Promise<Itens>{
    const iten = await this.itensRepository.findOne({where: {name}});

    if(iten){
      return iten;
    }

    return this.itensRepository.create({name});
  }

  public async listAllItens(): Promise<Itens[]>{
    return await this.itensRepository.find();
  }
}
