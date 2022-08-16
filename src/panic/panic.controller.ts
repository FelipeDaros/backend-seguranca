import { Body, Controller, Get, HttpCode, HttpStatus, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreatePanicDto } from './dto/createPanicDto';
import { UpdatePanicDto } from './dto/updatePanicDto';
import { PanicService } from './panic.service';

@Controller('panic')
export class PanicController {
  constructor(private readonly panicService: PanicService){}
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(){
    return this.panicService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  create(@Body() cratePanicDto:CreatePanicDto){
    return this.panicService.create(cratePanicDto);
  }

  @Patch()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  update(@Body() updatePanicDto: UpdatePanicDto){

    return this.panicService.update(updatePanicDto);
  }
}
