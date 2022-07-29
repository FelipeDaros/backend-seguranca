import { Users } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtPayload } from './models/jwt-payload.model';
import { Request } from 'express';
export declare class AuthService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<Users>);
    createAccessToken(userId: string): Promise<string>;
    validateUser(jwtPayload: JwtPayload): Promise<Users>;
    private static jwtExtractor;
    returnJwtExtractor(): (request: Request) => string;
}
