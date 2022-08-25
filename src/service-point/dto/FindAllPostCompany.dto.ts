import { IsNotEmpty, IsString } from "class-validator";
import { Company } from "src/company/entities/company.entity";


export class FindAllPostCompanyDto{
  @IsNotEmpty()
  company_id: string;
}