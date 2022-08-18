import { IsEmpty, IsString} from "class-validator";
import { Company } from "src/company/entities/company.entity";


export class CreateServicePointDto{

  @IsString()
  latitude: string;

  @IsString()
  longitude: string;

  @IsString()
  locale: string;

  @IsEmpty()
  stats: string;

  @IsEmpty()
  qrcode: string;
   
  @IsString()
  company_id: Company;
} 

