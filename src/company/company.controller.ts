import { Body, ClassSerializerInterceptor, Controller, Get, HttpCode, HttpStatus, Post, UseInterceptors } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/createCompany.dto';

@Controller('company')
export class CompanyController {
  constructor(
    private readonly companyService: CompanyService
  ){}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  @HttpCode(HttpStatus.OK)
  public findALl(){
    return this.companyService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  public create(@Body() createCompanyDto: CreateCompanyDto){
    return this.companyService.create(createCompanyDto); 
  }
}
