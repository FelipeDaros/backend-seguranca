import { PartialType } from "@nestjs/mapped-types"
import { CreateOccorrenceDto } from "./create-occorrence.dto"


export class UpdateOccorrenceDto extends PartialType(CreateOccorrenceDto){}