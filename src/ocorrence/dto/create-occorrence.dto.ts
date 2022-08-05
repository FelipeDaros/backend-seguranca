import { IsDate, IsNumber, IsString } from "class-validator";
import { Users } from "src/users/entities/user.entity";


export class CreateOccorrenceDto{
  @IsString()
  resume: string;

  @IsString()
  user_id: Users;

  @IsString()
  place: string;

  @IsString()
  type: string;

  @IsNumber()
  stats: number;

  @IsString()
  photo: string;

  @IsString()
  date_occurrence: Date;

  @IsString()
  current_time: Date;
}