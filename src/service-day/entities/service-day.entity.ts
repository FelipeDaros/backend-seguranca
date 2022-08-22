import { Itens } from "src/post/entities/itens.entity";
import { Post } from "src/post/entities/post.entity";
import { Users } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('service-day')
export class ServiceDay{
  @PrimaryColumn()
  id: string;

  @ManyToOne(type => Users, {eager: true})
  @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
  user_id: Users;

  @ManyToOne(type => Post, {eager: true})
  @JoinColumn({name: 'post_id', referencedColumnName: 'id'})
  post_id: Post;

  @JoinTable({ name: 'service_itens'})
  @ManyToMany(() => Itens, (itens) => itens.id, {cascade: true, eager: true})
  itens: Itens[];

  @Column()
  created_at: Date;

  @Column()
  report_reading: number;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}