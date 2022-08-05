import { Users } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";


@Entity('panic')
export class Panic{
  @PrimaryColumn()
  id: string;

  @ManyToOne(type => Users, {eager: true})
  @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
  user_id: Users;

  @Column({default: 0, nullable: true})
  stats: number;
 
  @Column()
  date: Date;
}