import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { ServiceDay } from "../../service-day/entities/service-day.entity";
import { Post } from "./post.entity";


@Entity('itens')
export class Itens{
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  stats: number; 

  @ManyToMany(() => Post, (post) => post.points_post)
  post: Post[]

  @ManyToMany(() => ServiceDay, (serviceDay) => serviceDay.itens)
  serviceDay: ServiceDay;

  constructor(){
    if(!this.id){
      this.id = uuid();
      this.stats = 1;
    }
  }

}