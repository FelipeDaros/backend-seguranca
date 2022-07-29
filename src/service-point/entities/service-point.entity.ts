import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
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

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}