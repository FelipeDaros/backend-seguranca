import { Users } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid';

@Entity('user_point')
export class UserPoint{
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  point_time: Date;

  @Column()
  user_id: string;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}