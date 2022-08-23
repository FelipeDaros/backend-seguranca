import { IsDateString, IsString } from "class-validator";
import { Users } from "src/users/entities/user.entity";


export class CreateAlertDto{
  @IsString()
  user_id: Users;

  @IsDateString()
  created_at: string;
}