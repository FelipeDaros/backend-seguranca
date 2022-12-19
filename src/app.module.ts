import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { OcorrenceModule } from './ocorrence/ocorrence.module';
import { ServicePointModule } from './service-point/service-point.module';
import { PanicModule } from './panic/panic.module';
import { LocationModule } from './location/location.module';
import { RoundController } from './round/round.controller';
import { RoundModule } from './round/round.module';
import { PostModule } from './post/post.module';
import { ServiceDayModule } from './service-day/service-day.module';
import { CompanyModule } from './company/company.module';
import { AlertModule } from './alert/alert.module';
import { TimeAlertModule } from './time-alert/time-alert.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/db.sql',
      entities: [__dirname + '/**/*.entity.js'],
      synchronize: true,
      autoLoadEntities: false
    }),
    UsersModule,
    AuthModule,
    OcorrenceModule,
    ServicePointModule,
    PanicModule,
    LocationModule,
    RoundModule,
    PostModule,
    ServiceDayModule,
    CompanyModule,
    AlertModule,
    TimeAlertModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
