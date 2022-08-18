import { IsArray, IsString } from "class-validator";
import { Company } from "src/company/entities/company.entity";


export class CreatePostDto{
  @IsString()
  name: string;

  @IsArray()
  readonly points_post: string[];

  @IsString()
  readonly company_id: Company;
}