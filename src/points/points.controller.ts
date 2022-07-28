import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreatePointDto } from './dto/create-point.dto';
import { PointsService } from './points.service';

@Controller('points')
export class PointsController {
  constructor(
    private readonly pointService: PointsService
  ){}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  public async create(@Body() createPointDto:CreatePointDto){
    return this.pointService.createPoint(createPointDto);
  }

  /*@Get()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  public async findAll(){
    return this.pointService.findAll();
  }*/

}
