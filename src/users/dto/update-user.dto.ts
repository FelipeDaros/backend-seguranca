import { PartialType } from "@nestjs/mapped-types";
import { IsBoolean, IsEmpty, IsString } from "class-validator";
import { CreateUserDto } from "./create-user.dto";


export class UpdateUserDto extends PartialType(CreateUserDto){}