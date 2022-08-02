import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateRoundDto } from './dto/createRound.dto';
import { Round } from './entities/round.entity';

@Injectable()
export class RoundService {
  constructor(
    @InjectRepository(Round)
    private readonly roundRepository: Repository<Round>
  ){}

  public async create(createRoundDto: CreateRoundDto): Promise<Round>{
    const round = this.roundRepository.create(createRoundDto);

    return await this.roundRepository.save(round);
  }

  public async findAllRoundsUser(user_id: string){
    const round = await this.roundRepository.find({
      where: user_id
    })
    return round
  }
}
