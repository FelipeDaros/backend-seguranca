import { IsEmpty, IsString} from "class-validator";


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
} 

