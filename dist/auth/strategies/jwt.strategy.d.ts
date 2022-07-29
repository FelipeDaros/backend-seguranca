import { Users } from "src/users/entities/user.entity";
import { AuthService } from "../auth.service";
import { JwtPayload } from "../models/jwt-payload.model";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(jwtPayload: JwtPayload): Promise<Users>;
}
export {};
