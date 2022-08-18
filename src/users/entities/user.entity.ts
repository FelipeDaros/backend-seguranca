import { Exclude } from "class-transformer";
import { Company } from "src/company/entities/company.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
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

  @ManyToOne(type => Company, {eager: true})
  @JoinColumn({name: 'company', referencedColumnName: 'id'})
  company: Company;

  constructor(){
    if(!this.id){
      this.id = uuid();
      this.isAdmin = 0;
    }

    
  }
}