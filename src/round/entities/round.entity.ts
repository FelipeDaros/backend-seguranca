import { ServicePoint } from "src/service-point/entities/service-point.entity";
import { Users } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';


@Entity('round')
export class Round{
  @PrimaryColumn()
  id:string;

  @ManyToOne(type => ServicePoint, {eager: true})
  @JoinColumn({name: 'point_id', referencedColumnName: 'id'})
  point_id: ServicePoint;

  @ManyToOne(type => Users, {eager: true})
  @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
  user_id: Users;

  @Column()
  data: Date;

  @Column()
  stats: number;
  
  constructor(){
    if(!this.id){
      this.id = uuid();
      this.stats = 1;
    }
  }
}