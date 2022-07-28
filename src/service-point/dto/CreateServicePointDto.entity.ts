import { IsEmpty, IsNumber, IsString } from "class-validator";


export class CreateServicePointDto{

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsNumber()
  latitudeDelta: number;

  @IsNumber()
  longitudeDelta: number;

  @IsString()
  locale: string;

  @IsEmpty()
  stats: string;

  @IsEmpty()
  qrcode: string;
} 

