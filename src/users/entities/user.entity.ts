import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('users')
export class Users{
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  email: string;

  @Column({length: 12})
  contact: string;

  @Column({length: 15})
  cpf: string;

  @Column({length: 1, default: 'I'})
  stats: string;

  @Column({default: 0})
  isAdmin: number;

  constructor(){
    if(!this.id){
      this.id = uuid();
      this.isAdmin = 0;
    }

    
  }
}