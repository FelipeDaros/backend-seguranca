import { IsArray, IsDate, IsNumber, IsString } from "class-validator";
import { Post } from "src/post/entities/post.entity";
import { Users } from "src/users/entities/user.entity";
import { Itens } from "../entities/itens.entity";


export class CreateServiceDayDto{
  @IsString()
  readonly user_id: Users;

  @IsArray()
  readonly itens: string[];

  @IsString()
  readonly post_id: Post;

  @IsNumber()
  readonly report_reading: number;

  @IsString()
  readonly created_at: Date;
}