"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointsModule = void 0;
const common_1 = require("@nestjs/common");
const points_service_1 = require("./points.service");
const points_controller_1 = require("./points.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const user_point_entity_1 = require("./entities/user-point.entity");
const users_module_1 = require("../users/users.module");
const users_service_1 = require("../users/users.service");
const auth_module_1 = require("../auth/auth.module");
let PointsModule = class PointsModule {
};
PointsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_point_entity_1.UserPoint, user_entity_1.Users]), users_module_1.UsersModule, auth_module_1.AuthModule],
        providers: [points_service_1.PointsService, users_service_1.UsersService],
        controllers: [points_controller_1.PointsController]
    })
], PointsModule);
exports.PointsModule = PointsModule;
//# sourceMappingURL=points.module.js.map