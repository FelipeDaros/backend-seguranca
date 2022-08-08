import { IsEmpty, IsString } from "class-validator";


export class CreateUserDto{

  @IsString()
  readonly name: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly contact: string;

  @IsString()
  readonly cpf: string;
}