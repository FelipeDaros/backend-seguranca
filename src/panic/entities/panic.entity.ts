import { Users } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryColumn } from "typeorm";


@Entity('panic')
export class Panic{
  @PrimaryColumn()
  id: string;

  @OneToOne(() => Users, {eager: true})
  @JoinColumn({name: 'user_id'})
  user_id: Users;

  @Column({default: 'ATIVO', nullable: true})
  stats: string;

  @Column()
  date: string;
}