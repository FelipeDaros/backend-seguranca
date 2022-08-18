import { Company } from "src/company/entities/company.entity";
import { Round } from "src/round/entities/round.entity";
import { Itens } from "src/service-day/entities/itens.entity";
import { ServicePoint } from "src/service-point/entities/service-point.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('post')
export class Post{
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne(type => Company, {eager: true})
  @JoinColumn({name: 'company_id', referencedColumnName: 'id'})
  company_id: Company;

  @JoinTable({name: 'points_post'})
  @ManyToMany(() => ServicePoint, (points) => points.id, {cascade: true, eager: true})
  points_post: ServicePoint[]

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}