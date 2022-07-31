"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const auth_service_1 = require("../auth/auth.service");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(userRepository, authService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }
    async findAll() {
        return await this.userRepository.find();
    }
    async findOne(id) {
        return await this.userRepository.findOne({
            where: {
                id: id
            }
        });
    }
    async update(id, updateUserDto) {
        const findUser = await this.userRepository.findOne({
            where: {
                id
            }
        });
        console.log(findUser);
        if (!findUser) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'Usuário não encontrado'
            }, common_1.HttpStatus.BAD_REQUEST);
        }
        return this.userRepository.update(findUser, updateUserDto);
    }
    async create(createUserDto) {
        const emailExists = await this.userRepository.findOne({
            where: {
                email: createUserDto.email
            }
        });
        const cpfExists = await this.userRepository.findOne({
            where: {
                cpf: createUserDto.cpf
            }
        });
        if (emailExists) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.CONFLICT,
                error: 'Emai já cadastrado na plataforma'
            }, common_1.HttpStatus.CONFLICT);
        }
        if (cpfExists) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.CONFLICT,
                error: 'CPF já cadastrado na plataforma'
            }, common_1.HttpStatus.CONFLICT);
        }
        const passwordHash = await bcrypt.hashSync(createUserDto.password, 8);
        const user = this.userRepository.create({
            name: createUserDto.name,
            cpf: createUserDto.cpf,
            email: createUserDto.email,
            password: passwordHash,
            contact: createUserDto.contact,
            situation: 'A'
        });
        return this.userRepository.save(user);
    }
    async delete(id) {
        const user = await this.userRepository.findOne(id);
        if (!user) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FOUND,
                error: 'Usuário não encontrado!'
            }, common_1.HttpStatus.FOUND);
        }
        return this.userRepository.remove(user);
    }
    async signin(signinDto) {
        const user = await this.userRepository.findOne({
            where: {
                email: signinDto.email
            }
        });
        const match = await this.checkPassword(signinDto.password, user);
        if (!match) {
            throw new common_1.NotFoundException('Invalid credentials.');
        }
        const jwtToken = await this.authService.createAccessToken(user.id);
        return { id: user.id, name: user.name, jwtToken, email: user.email };
    }
    async checkPassword(password, user) {
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            throw new common_1.NotFoundException('Password not found.');
        }
        return match;
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_service_1.AuthService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map