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

  @Column({length: 1})
  situation: string;

  @Column({default: false})
  isAdmin: boolean;

  constructor(){
    if(!this.id){
      this.id = uuid();
      this.isAdmin = false;
    }

    
  }
}