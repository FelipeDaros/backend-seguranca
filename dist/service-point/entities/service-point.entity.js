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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicePoint = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let ServicePoint = class ServicePoint {
    constructor() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], ServicePoint.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ServicePoint.prototype, "latitude", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ServicePoint.prototype, "longitude", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ServicePoint.prototype, "latitudeDelta", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ServicePoint.prototype, "longitudeDelta", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ServicePoint.prototype, "locale", void 0);
__decorate([
    typeorm_1.Column({ length: 1 }),
    __metadata("design:type", String)
], ServicePoint.prototype, "stats", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ServicePoint.prototype, "qrcode", void 0);
ServicePoint = __decorate([
    typeorm_1.Entity('service_point'),
    __metadata("design:paramtypes", [])
], ServicePoint);
exports.ServicePoint = ServicePoint;
//# sourceMappingURL=service-point.entity.js.map