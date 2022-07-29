import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { OcorrenceModule } from './ocorrence/ocorrence.module';
import { ServicePointModule } from './service-point/service-point.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://puenlhol:UbJXkq9NgFGKrr_iTeAiI-SnRw5vgWBk@fanny.db.elephantsql.com/puenlhol',
      entities: [__dirname + '/**/*.entity.js'],
      logging: true,
      synchronize: true,
      autoLoadEntities: false
    }),
    UsersModule,
    AuthModule,
    OcorrenceModule,
    ServicePointModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
