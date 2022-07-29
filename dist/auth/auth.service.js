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
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const typeorm_2 = require("typeorm");
const jsonwebtoken_1 = require("jsonwebtoken");
let AuthService = AuthService_1 = class AuthService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async createAccessToken(userId) {
        return jsonwebtoken_1.sign({ userId }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRATION,
        });
    }
    async validateUser(jwtPayload) {
        const user = await this.usersRepository.findOne({
            where: {
                id: jwtPayload.userId
            }
        });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found.');
        }
        return user;
    }
    static jwtExtractor(request) {
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new common_1.BadRequestException('Bad request.');
        }
        const [, token] = authHeader.split(' ');
        return token;
    }
    returnJwtExtractor() {
        return AuthService_1.jwtExtractor;
    }
};
AuthService = AuthService_1 = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map