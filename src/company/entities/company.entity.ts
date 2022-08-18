import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('company')
export class Company{
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  city: string;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}