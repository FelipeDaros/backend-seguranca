import { CreateUserDto } from './dto/create-user.dto';
import { SigninDto } from './dto/signin.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    findAll(): Promise<import("./entities/user.entity").Users[]>;
    findOne(id: string): Promise<import("./entities/user.entity").Users>;
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").Users>;
    remove(id: string): Promise<import("./entities/user.entity").Users>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    signin(signinDto: SigninDto): Promise<{
        name: string;
        jwtToken: string;
        email: string;
    }>;
}
