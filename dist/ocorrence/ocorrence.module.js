"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcorrenceModule = void 0;
const common_1 = require("@nestjs/common");
const ocorrence_service_1 = require("./ocorrence.service");
const ocorrence_controller_1 = require("./ocorrence.controller");
const typeorm_1 = require("@nestjs/typeorm");
const occorrence_entity_1 = require("./entities/occorrence.entity");
let OcorrenceModule = class OcorrenceModule {
};
OcorrenceModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([occorrence_entity_1.Occurrence])],
        providers: [ocorrence_service_1.OcorrenceService],
        controllers: [ocorrence_controller_1.OcorrenceController]
    })
], OcorrenceModule);
exports.OcorrenceModule = OcorrenceModule;
//# sourceMappingURL=ocorrence.module.js.map