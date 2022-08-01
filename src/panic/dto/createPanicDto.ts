import { IsEmpty, IsString } from "class-validator";
import { Users } from "src/users/entities/user.entity";

export class CreatePanicDto{

  @IsString()
  readonly user_id?: Users;
  
  @IsString()
  readonly stats?: string;

  @IsString()
  readonly date?: string;
}