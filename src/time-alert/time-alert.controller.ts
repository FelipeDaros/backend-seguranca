import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateTimeAlertDto } from './dto/CreateTimeAlert.dto';
import { TimeAlertService } from './time-alert.service';

@Controller('time-alert')
export class TimeAlertController {

    constructor(
        private readonly serviceTimeAlert: TimeAlertService
    ){}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    public create(@Body() createTimeAlert:CreateTimeAlertDto){
        return this.serviceTimeAlert.createTimeAlert(createTimeAlert);
    }

    @Get('/:id')
    @HttpCode(HttpStatus.FOUND)
    public listLatestAlertUser(@Param('id') user_id: string){
        return this.serviceTimeAlert.listLatestAlertUser(user_id);
    }

    @Get('/findalert/:post_id')
    @HttpCode(HttpStatus.FOUND)
    public findTimeAlertUser(@Param('post_id') user_id: string){
        return this.serviceTimeAlert.findTimeAlertUser(user_id);
    }
}
