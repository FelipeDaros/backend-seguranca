import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtPayload } from './models/jwt-payload.model';
import {Request} from 'express';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>
  ){}

  public async createAccessToken(userId: string): Promise<string> {
    return sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
  }

  public async validateUser(jwtPayload: JwtPayload): Promise<Users> {
    const user = await this.usersRepository.findOne({ 
      where: {
        id: jwtPayload.userId
      }
     });
     
    if (!user) {
      throw new UnauthorizedException('User not found.');
    }
    return user;
  }

  private static jwtExtractor(request: Request): string {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new BadRequestException('Bad request.');
    }

    const [, token] = authHeader.split(' ');

    return token;
  }

  public returnJwtExtractor(): (request: Request) => string {
    return AuthService.jwtExtractor;
  }

}
