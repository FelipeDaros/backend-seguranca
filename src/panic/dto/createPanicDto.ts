import { IsEmpty, IsString } from "class-validator";

export class CreatePanicDto{

  @IsString()
  readonly user_id?: string;
  
  @IsString()
  readonly stats?: string;

  @IsString()
  readonly date?: string;
}