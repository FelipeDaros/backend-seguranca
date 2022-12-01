import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateServiceDayDto } from './dto/create-service-day.dto';
import { IDate, ServiceDayService } from './service-day.service';

@Controller('service-day')
export class ServiceDayController {
  constructor(
    private readonly serviceDayService: ServiceDayService
  ){}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  public create(@Body() createServiceDayDto: CreateServiceDayDto){
    console.log(createServiceDayDto)
    return this.serviceDayService.create(createServiceDayDto);
  }

  @Get()
  //@UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  public findAll(){
    return this.serviceDayService.findAll();
  }


  @Get('/latest')
  @HttpCode(HttpStatus.OK)
  public findLatest(@Body() {end_date, start_date}: IDate){
    return this.serviceDayService.findLatest({end_date, start_date});
  }

}
