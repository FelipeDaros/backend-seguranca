import { IsString } from "class-validator";
import { ServicePoint } from "src/service-point/entities/service-point.entity";
import { Users } from "src/users/entities/user.entity";


export class CreateRoundDto{
  @IsString()
  readonly user_id: Users;

  @IsString()
  readonly point_id: ServicePoint;

  @IsString()
  readonly data: string;
}