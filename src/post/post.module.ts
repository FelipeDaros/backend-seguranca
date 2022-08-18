import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/company/entities/company.entity';
import { Itens } from 'src/post/entities/itens.entity';
import { ServicePoint } from 'src/service-point/entities/service-point.entity';
import { Post } from './entities/post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Company, ServicePoint, Itens])],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
