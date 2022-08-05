import { Users } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid';

@Entity('occurrence')
export class Occurrence{
  @PrimaryColumn()
  id: string;

  @Column()
  resume: string;

  @ManyToOne(type => Users, {eager: true})
  @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
  user_id: Users;

  @Column()
  place: string;

  @Column()
  type: string;

  @Column()
  stats: number;

  @Column()
  photo: string;

  @Column()
  date_occurrence: Date;

  @Column()
  current_time: Date;

  constructor(){
    if(!this.id){
      this.id = uuid();
      this.stats = 1;
    }
  }
}