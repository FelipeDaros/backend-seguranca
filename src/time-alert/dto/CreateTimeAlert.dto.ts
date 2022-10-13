import { IsString } from "class-validator";
import { Company } from "src/company/entities/company.entity";
import { Users } from "src/users/entities/user.entity";


export class CreateTimeAlertDto{
    @IsString()
    readonly user_id: Users;

    @IsString()
    readonly company_id: Company;

    @IsString()
    readonly latestAlert: Date;
}