import { Body, Controller, Get, Post } from '@nestjs/common';
import { json } from 'express';
import { CreateRoundDto } from './dto/createRound.dto';
import { RoundService } from './round.service';

@Controller('round')
export class RoundController {
  constructor(
    private readonly roundService: RoundService
  ){}

  @Post()
  public create(@Body() createRoundDto:CreateRoundDto){
    return this.roundService.create(createRoundDto);
  }

  @Get()
  public async findAll(@Body() user_id: string){
    const rounds = await this.roundService.findAllRoundsUser(user_id);
    return rounds
  }
}
