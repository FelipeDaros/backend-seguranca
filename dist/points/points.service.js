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
exports.PointsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const typeorm_2 = require("typeorm");
const user_point_entity_1 = require("./entities/user-point.entity");
let PointsService = class PointsService {
    constructor(pointService, userService) {
        this.pointService = pointService;
        this.userService = userService;
    }
    async createPoint(createPointDto) {
        const point = await this.pointService.create(createPointDto);
        const userNotExists = await this.userService.findOne({
            where: {
                id: createPointDto.user_id
            }
        });
        if (!userNotExists) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'Usuário não encontrado!'
            }, common_1.HttpStatus.NOT_FOUND);
        }
        this.pointService.save(point);
        return point;
    }
};
PointsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_point_entity_1.UserPoint)),
    __param(1, typeorm_1.InjectRepository(user_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PointsService);
exports.PointsService = PointsService;
//# sourceMappingURL=points.service.js.map