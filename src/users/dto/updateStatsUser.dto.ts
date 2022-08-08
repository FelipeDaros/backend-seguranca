import { IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";


export class UpdateStatsUserDto extends PartialType(CreateUserDto){
  @IsString()
  stats: string;
}