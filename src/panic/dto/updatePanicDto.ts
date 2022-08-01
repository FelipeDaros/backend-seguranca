import { PartialType } from "@nestjs/mapped-types";
import { IsString } from "class-validator";
import { CreatePanicDto } from "./createPanicDto";


export class UpdatePanicDto extends PartialType(CreatePanicDto){
  @IsString()
  readonly id: string;
}