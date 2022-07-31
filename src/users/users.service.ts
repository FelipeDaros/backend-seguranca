import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from "bcrypt";
import e from 'express';
import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { SigninDto } from './dto/signin.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    private readonly authService: AuthService
  ){}

  async findAll(){
    return await this.userRepository.find();
  }

  async findOne(id: string){
    return await this.userRepository.findOne({
      where: {
        id: id
      }
    })
  }

  async update(id: string, updateUserDto: UpdateUserDto){
    const findUser = await this.findOne(id);

    if(!findUser){
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Usuário não encontrado'
      }, HttpStatus.BAD_REQUEST)
    }

    return this.userRepository.update(id, updateUserDto);
  }

  async create(createUserDto: CreateUserDto){
    const emailExists = await this.userRepository.findOne({
      where: {
        email: createUserDto.email
      }
    })
    
    const cpfExists = await this.userRepository.findOne({
      where: {
        cpf: createUserDto.cpf
      }
    })
    
    if(emailExists){
      throw new HttpException({
        status: HttpStatus.CONFLICT,
        error: 'Emai já cadastrado na plataforma'
      }, HttpStatus.CONFLICT)
    }

    if(cpfExists){
      throw new HttpException({
        status: HttpStatus.CONFLICT,
        error: 'CPF já cadastrado na plataforma'
      }, HttpStatus.CONFLICT)
    }

    const passwordHash = await bcrypt.hashSync(createUserDto.password, 8);

    const user = this.userRepository.create({
      name: createUserDto.name,
      cpf: createUserDto.cpf,
      email: createUserDto.email,
      password: passwordHash,
      contact: createUserDto.contact,
      situation: 'A'
    });
    
    return this.userRepository.save(user);
  }

  async delete(id: string){
    const user = await this.userRepository.findOne(id);

    if(!user){
      throw new HttpException({
        status: HttpStatus.FOUND,
        error: 'Usuário não encontrado!'
      }, HttpStatus.FOUND)
    }

    return this.userRepository.remove(user);
  }

  async signin(
    signinDto: SigninDto
  ): Promise<{id: string, name: string, jwtToken: string, email: string}>{
    const user = await this.userRepository.findOne({
      where: {
        email: signinDto.email
      }
    })

    const match = await this.checkPassword(signinDto.password, user);

    if (!match) {
      throw new NotFoundException('Invalid credentials.');
    }

    const jwtToken = await this.authService.createAccessToken(user.id);

    return {id: user.id, name: user.name, jwtToken, email: user.email};
  }

  private async checkPassword(password: string, user: Users): Promise<boolean> {
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new NotFoundException('Password not found.');
    }
    return match;
  }


}
