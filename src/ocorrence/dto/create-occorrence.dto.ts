import { IsDate, IsString } from "class-validator";


export class CreateOccorrenceDto{
  @IsString()
  resume: string;

  @IsString()
  user_id: string;

  @IsString()
  place: string;

  @IsString()
  type: string;

  @IsString()
  situation: string;

  @IsString()
  photo: string;

  @IsString()
  date_occurrence: Date;

  @IsString()
  current_time: Date;
}