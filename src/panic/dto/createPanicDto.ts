import { IsEmpty, IsNumber, IsString } from "class-validator";
import { Users } from "src/users/entities/user.entity";

export class CreatePanicDto{

  @IsString()
  readonly user_id?: Users;
  
  @IsNumber()
  readonly stats?: number;

  @IsString()
  readonly date?: Date;
}