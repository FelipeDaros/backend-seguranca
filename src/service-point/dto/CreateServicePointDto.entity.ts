import { IsEmpty, IsDecimal, IsString } from "class-validator";


export class CreateServicePointDto{

  @IsDecimal()
  latitude: number;

  @IsDecimal()
  longitude: number;

  @IsDecimal()
  latitudeDelta: number;

  @IsDecimal()
  longitudeDelta: number;

  @IsString()
  locale: string;

  @IsEmpty()
  stats: string;

  @IsEmpty()
  qrcode: string;
} 

