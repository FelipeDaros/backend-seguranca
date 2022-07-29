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

  @IsDate()
  date_occurrence: string;

  @IsDate()
  current_time: string;
}