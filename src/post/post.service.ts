import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Itens } from 'src/service-day/entities/itens.entity';
import { FindOperator, Repository } from 'typeorm';
import { CreatePostDto } from './dto/createPost-dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
 constructor(
  @InjectRepository(Post)
  private readonly postRepository: Repository<Post>,
  @InjectRepository(Itens)
  private readonly itensRepository: Repository<Itens>
 ){}

 public async create(createPostDto: CreatePostDto): Promise<Post>{
  const post = this.postRepository.create(createPostDto);

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
}
