import { IsString } from "class-validator";
import { Users } from "src/users/entities/user.entity";


export class CreateLocationDto{
 
  @IsString()
  latitude: string;
  
  @IsString()
  longitude: string;

  @IsString()
  user_id: Users;

  @IsString()
  date: Date;
}