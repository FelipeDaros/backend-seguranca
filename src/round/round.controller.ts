import { Body, Controller, Get, HttpCode, HttpStatus, Patch, Post } from '@nestjs/common';
import { json } from 'express';
import { SaveLocaleDto } from './dto/createRound.dto';
import { RoundService } from './round.service';

@Controller('round')
export class RoundController {
  constructor(
    private readonly roundService: RoundService
  ){}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public validator(@Body() saveLocaleDto:SaveLocaleDto){
    return this.roundService.create(saveLocaleDto);
  }
}
