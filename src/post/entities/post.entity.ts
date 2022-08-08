import { Itens } from "src/service-day/entities/itens.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('post')
export class Post{
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}