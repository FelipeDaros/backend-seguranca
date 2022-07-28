import { IsDate, IsNotEmpty } from "class-validator";
import { Users } from "src/users/entities/user.entity";


export class CreatePointDto{
  @IsNotEmpty()
  readonly point_time: Date;

  @IsNotEmpty()
  readonly user_id: string;
}