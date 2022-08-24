import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AlertService } from './alert.service';
import { CreateAlertDto } from './dto/createAlert.dto';

@Controller('alert')
export class AlertController {
  constructor(
    private readonly alertService: AlertService
  ){}

  @Get()
  @HttpCode(HttpStatus.OK)
  public findAll(){
    return this.alertService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public create(@Body() createAlertDto:CreateAlertDto){
    return this.alertService.create(createAlertDto);
  }
}
