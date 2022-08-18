import { IsEmpty, IsString } from "class-validator";
import { Company } from "src/company/entities/company.entity";


export class CreateUserDto{

  @IsString()
  readonly name: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly contact: string;

  @IsString()
  readonly cpf: string;

  @IsString()
  readonly company: Company;
}