import { IsEmpty, IsString} from "class-validator";


export class CreateServicePointDto{

  @IsString()
  latitude: number;

  @IsString()
  longitude: number;

  @IsString()
  latitudeDelta: number;

  @IsString()
  longitudeDelta: number;

  @IsString()
  locale: string;

  @IsEmpty()
  stats: string;

  @IsEmpty()
  qrcode: string;
} 

