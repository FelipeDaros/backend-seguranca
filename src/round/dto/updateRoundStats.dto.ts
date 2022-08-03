import { IsBoolean, IsString } from "class-validator";


export class UpdateRoundStats{

  @IsString()
  id: string;

  @IsString()
  latitude: string;

  @IsString()
  longitude: string;

  @IsString()
  locale: string;

  @IsBoolean()
  stats: boolean
}