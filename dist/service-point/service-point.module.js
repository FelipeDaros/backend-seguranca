"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicePointModule = void 0;
const common_1 = require("@nestjs/common");
const service_point_service_1 = require("./service-point.service");
const service_point_controller_1 = require("./service-point.controller");
const typeorm_1 = require("@nestjs/typeorm");
const service_point_entity_1 = require("./entities/service-point.entity");
let ServicePointModule = class ServicePointModule {
};
ServicePointModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([service_point_entity_1.ServicePoint])],
        providers: [service_point_service_1.ServicePointService],
        controllers: [service_point_controller_1.ServicePointController]
    })
], ServicePointModule);
exports.ServicePointModule = ServicePointModule;
//# sourceMappingURL=service-point.module.js.map