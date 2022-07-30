import { Body, Controller, Get, HttpCode, HttpStatus, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateOccorrenceDto } from './dto/create-occorrence.dto';
import { UpdateOccorrenceDto } from './dto/update-occorrence.dto';
import { OcorrenceService } from './ocorrence.service';

@Controller('ocorrence')
export class OcorrenceController {
  constructor(
    private readonly occorrenceService: OcorrenceService
  ){}
  
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createOccorrenceDto:CreateOccorrenceDto){
    return this.occorrenceService.create(createOccorrenceDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'))
  async findAll(){
    return this.occorrenceService.findAll();
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  async update(@Body() id: string, updateOccorrenceDto: UpdateOccorrenceDto){
    return this.occorrenceService.update(id, updateOccorrenceDto);
  }
}
