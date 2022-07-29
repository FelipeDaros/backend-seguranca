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
exports.OcorrenceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const occorrence_entity_1 = require("./entities/occorrence.entity");
let OcorrenceService = class OcorrenceService {
    constructor(occurrenceRepository) {
        this.occurrenceRepository = occurrenceRepository;
    }
    async findAll() {
        return await this.occurrenceRepository.find();
    }
    async update(id, updateOccorrenceDto) {
        const findOccorrence = await this.occurrenceRepository.findOne(id);
        if (!findOccorrence) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'Usuário não encontrado'
            }, common_1.HttpStatus.NOT_FOUND);
        }
        return this.occurrenceRepository.update(id, updateOccorrenceDto);
    }
    async create(createOccorrenceDto) {
        const occurrence = this.occurrenceRepository.create(createOccorrenceDto);
        return this.occurrenceRepository.save(occurrence);
    }
};
OcorrenceService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(occorrence_entity_1.Occurrence)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OcorrenceService);
exports.OcorrenceService = OcorrenceService;
//# sourceMappingURL=ocorrence.service.js.map