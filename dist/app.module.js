"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const ocorrence_module_1 = require("./ocorrence/ocorrence.module");
const service_point_module_1 = require("./service-point/service-point.module");
const panic_module_1 = require("./panic/panic.module");
const location_module_1 = require("./location/location.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                url: 'postgres://puenlhol:UbJXkq9NgFGKrr_iTeAiI-SnRw5vgWBk@fanny.db.elephantsql.com/puenlhol',
                entities: [__dirname + '/**/*.entity.js'],
                logging: true,
                synchronize: true,
                autoLoadEntities: false
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            ocorrence_module_1.OcorrenceModule,
            service_point_module_1.ServicePointModule,
            panic_module_1.PanicModule,
            location_module_1.LocationModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map