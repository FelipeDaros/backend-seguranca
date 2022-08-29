import { IsNumber, IsString } from "class-validator";
import { ServicePoint } from "src/service-point/entities/service-point.entity";
import { Users } from "src/users/entities/user.entity";


export class SaveLocaleDto{
  @IsString()
  readonly user_id: Users;

  @IsString()
  readonly point_id: ServicePoint;

  @IsString()
  readonly locale: string;

  @IsString()
  readonly data: Date;

  @IsNumber()
  readonly latitude: number;

  @IsNumber()
  readonly longitude: number;
}