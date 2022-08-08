import { IsString } from "class-validator";
import { Itens } from "src/service-day/entities/itens.entity";


export class CreatePostDto{
  @IsString()
  name: string;
}