import { IsString } from "class-validator";
import { Company } from "src/company/entities/company.entity";


export class FindAllPostCompanyDto{
  @IsString()
  company_id: Company;
}