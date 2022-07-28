import { Users } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinTable, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid'

@Entity('occurrence')
export class Occurrence{
  @PrimaryColumn()
  id: string;

  @Column()
  resume: string;

  @OneToOne(() => Users)
  @JoinTable()
  user_id: Users

  @Column()
  place: string;

  @CreateDateColumn()
  date_occurrence: Date;

  @CreateDateColumn()
  current_time: Date;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}