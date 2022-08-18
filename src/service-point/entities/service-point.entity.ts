import { Company } from "src/company/entities/company.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';


@Entity('service_point')
export class ServicePoint{
  @PrimaryColumn()
  id: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column()
  locale: string;

  @Column({length: 1})
  stats: string;

  @Column()
  qrcode: string;

  @ManyToOne(type => Company, {eager: true})
  @JoinColumn({name: 'company_id', referencedColumnName: 'id'})
  company_id: Company;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}