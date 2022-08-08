import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreatePostDto } from './dto/createPost-dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(
    private readonly servicePost: PostService
  ){}

  @Post()
  //@UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  public create(@Body() createPostDto: CreatePostDto){
    return this.servicePost.create(createPostDto);
  }

  @Get()
  //@UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  public findAll(){
    return this.servicePost.findAll();
  }

  @Get('/itens-guarita')
  @HttpCode(HttpStatus.OK)
  public findAllItensInGuarita(@Body() name: string){
    return this.servicePost.findAllItensInGuarita(name);
  }

}
