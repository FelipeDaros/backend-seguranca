import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './dto/createCompany.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>
  ){}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company>{
    const company = this.companyRepository.create(createCompanyDto);
    const companyAlreadyExits = await this.companyRepository.findOne(createCompanyDto.name);

    if(companyAlreadyExits){
      throw new HttpException({
        status: HttpStatus.AMBIGUOUS,
        error: 'Usuário não encontrado'
      }, HttpStatus.AMBIGUOUS);
    }

    return await this.companyRepository.save(company);
  }

  async findAll(): Promise<Company[]>{
    return await this.companyRepository.find();
  }
}
