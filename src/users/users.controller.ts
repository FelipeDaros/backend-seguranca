import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './dto/create-user.dto';
import { SigninDto } from './dto/signin.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService){}

  @Get()
  //@UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  findAll(){
    return this.userService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('id') id:string){
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto){
    return this.userService.create(createUserDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string){
    return this.userService.delete(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto){
    return this.userService.update(id, updateUserDto);
  }

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  public async signin(
    @Body() signinDto: SigninDto
  ): Promise<{name: string, jwtToken: string, email: string}>{
    return this.userService.signin(signinDto);
  }

}
  