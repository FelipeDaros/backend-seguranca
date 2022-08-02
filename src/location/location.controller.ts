import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateLocationDto } from './dto/createLocation.dto';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(
    private readonly locationService: LocationService
  ){}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK) 
  findAll(){
    return this.locationService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  create(@Body() createLocationDto: CreateLocationDto){
    return this.locationService.create(createLocationDto);
  }
}
