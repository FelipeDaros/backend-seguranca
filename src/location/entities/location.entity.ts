import { Users } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('location')
export class Location{
  @PrimaryColumn()
  id: string;

  @Column()
  latitude: string;
  
  @Column()
  longitude: string;

  @ManyToOne(type => Users, {eager: true})
  @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
  user_id: Users;

  @Column()
  date: Date;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}