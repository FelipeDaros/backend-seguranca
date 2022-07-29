import { Users } from "src/users/entities/user.entity";
export declare class Occurrence {
    id: string;
    resume: string;
    user_id: Users;
    place: string;
    date_occurrence: Date;
    current_time: Date;
    constructor();
}
