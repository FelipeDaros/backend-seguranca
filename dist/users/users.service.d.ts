import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { signinReturnDto } from './dto/sigininReturn.dto';
import { SigninDto } from './dto/signin.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';
export declare class UsersService {
    private readonly userRepository;
    private readonly authService;
    constructor(userRepository: Repository<Users>, authService: AuthService);
    findAll(): Promise<Users[]>;
    findOne(id: string): Promise<Users>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    create(createUserDto: CreateUserDto): Promise<Users>;
    delete(id: string): Promise<Users>;
    signin(signinDto: SigninDto): Promise<signinReturnDto>;
    private checkPassword;
}
