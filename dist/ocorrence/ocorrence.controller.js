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
exports.OcorrenceController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const create_occorrence_dto_1 = require("./dto/create-occorrence.dto");
const update_occorrence_dto_1 = require("./dto/update-occorrence.dto");
const ocorrence_service_1 = require("./ocorrence.service");
let OcorrenceController = class OcorrenceController {
    constructor(occorrenceService) {
        this.occorrenceService = occorrenceService;
    }
    async create(createOccorrenceDto) {
        return this.occorrenceService.create(createOccorrenceDto);
    }
    async findAll() {
        return this.occorrenceService.findAll();
    }
    async update(id, updateOccorrenceDto) {
        return this.occorrenceService.update(id, updateOccorrenceDto);
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_occorrence_dto_1.CreateOccorrenceDto]),
    __metadata("design:returntype", Promise)
], OcorrenceController.prototype, "create", null);
__decorate([
    common_1.Get(),
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OcorrenceController.prototype, "findAll", null);
__decorate([
    common_1.Put(),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_occorrence_dto_1.UpdateOccorrenceDto]),
    __metadata("design:returntype", Promise)
], OcorrenceController.prototype, "update", null);
OcorrenceController = __decorate([
    common_1.Controller('ocorrence'),
    __metadata("design:paramtypes", [ocorrence_service_1.OcorrenceService])
], OcorrenceController);
exports.OcorrenceController = OcorrenceController;
//# sourceMappingURL=ocorrence.controller.js.map