import { IsArray, IsString } from "class-validator";
import { Company } from "../entities/company.entity";


export class CreateCompanyDto{
  @IsString()
  readonly name: string;

  @IsString()
  readonly city: string;
}