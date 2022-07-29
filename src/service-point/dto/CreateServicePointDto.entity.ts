import { IsEmpty, IsString} from "class-validator";


export class CreateServicePointDto{

  @IsEmpty()
  latitude: number;

  @IsEmpty()
  longitude: number;

  @IsEmpty()
  latitudeDelta: number;

  @IsEmpty()
  longitudeDelta: number;

  @IsString()
  locale: string;

  @IsEmpty()
  stats: string;

  @IsEmpty()
  qrcode: string;
} 

