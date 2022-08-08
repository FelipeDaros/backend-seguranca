import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { ServiceDay } from "./service-day.entity";


@Entity('itens')
export class Itens{
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  stats: number; 

  @ManyToMany(() => ServiceDay, (serviceday) => serviceday.itens)
  serviceday: ServiceDay[]

  constructor(){
    if(!this.id){
      this.id = uuid();
      this.stats = 1;
    }
  }

}