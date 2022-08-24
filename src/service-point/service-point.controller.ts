import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateServicePointDto } from './dto/CreateServicePointDto';
import { ServicePointService } from './service-point.service';

@Controller('service-point')
export class ServicePointController {
  constructor(
    private readonly servicePointService: ServicePointService
  ){}

  @Post()
  //@UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  public async create(@Body() createServicePointDto: CreateServicePointDto){
    return this.servicePointService.create(createServicePointDto);
  }

  @Get()
  //@UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  public async findAll(){
    return this.servicePointService.findAll();
  }

  @Get('/company')
  @HttpCode(HttpStatus.OK)
  public async findAllPostCompany(@Body() company_id: string){
    return this.servicePointService.findAllPostCompany(company_id);
  }

  

}
