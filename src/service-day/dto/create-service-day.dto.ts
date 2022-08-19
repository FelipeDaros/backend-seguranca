import { IsArray, IsDate, IsNumber, IsString } from "class-validator";
import { Post } from "src/post/entities/post.entity";
import { Users } from "src/users/entities/user.entity";


export class CreateServiceDayDto{
  @IsString()
  readonly user_id: Users;

  @IsString()
  readonly post_id: Post;

  @IsNumber()
  readonly report_reading: number;

  @IsString()
  readonly created_at: Date;

  @IsArray()
  readonly itens: string[];
}