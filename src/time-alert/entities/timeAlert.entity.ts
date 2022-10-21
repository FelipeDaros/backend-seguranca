import { Company } from "src/company/entities/company.entity";
import { Users } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('time-alert')
export class TimeAlert{
    @PrimaryColumn()
    id: string;

    @ManyToOne(type => Users, {eager: true})
    @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
    user_id: Users;

    @ManyToOne(type => Company, {eager: true})
    @JoinColumn({name: 'company_id', referencedColumnName: 'id'})
    company_id: Company;

    @Column({default: 0})
    late: number;

    @CreateDateColumn()
    latestAlert: Date;


    constructor(){
        if(!this.id){
          this.id = uuid();
        }
      }
} 