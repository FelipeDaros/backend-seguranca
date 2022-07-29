import { IsEmpty, IsDecimal, IsString, IsLatitude, IsLongitude } from "class-validator";


export class CreateServicePointDto{

  @IsLatitude()
  latitude: number;

  @IsLongitude()
  longitude: number;

  @IsLatitude()
  latitudeDelta: number;

  @IsLongitude()
  longitudeDelta: number;

  @IsString()
  locale: string;

  @IsEmpty()
  stats: string;

  @IsEmpty()
  qrcode: string;
} 

