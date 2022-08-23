import { Users } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('alert')
export class Alert{
  @PrimaryColumn()
  id: string;

  @ManyToOne(type => Users, {eager: true})
  @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
  user_id: Users;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}