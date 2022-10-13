import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreatePostDto } from './dto/createPost-dto';
import { PostService } from './post.service';

interface IPost{
  post_id: string;
}

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

  @Get('/itens')
  @HttpCode(HttpStatus.OK)
  public findAllItens(@Body() post: IPost){
    return this.servicePost.listAllItensPost(post);
  }

}
