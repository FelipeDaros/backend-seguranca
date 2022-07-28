import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-jwt';
import { Users } from "src/users/entities/user.entity";
import { AuthService } from "../auth.service";
import { JwtPayload } from "../models/jwt-payload.model";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: authService.returnJwtExtractor(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(jwtPayload: JwtPayload): Promise<Users> {
    const user = await this.authService.validateUser(jwtPayload);
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}