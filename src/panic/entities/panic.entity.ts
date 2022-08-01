import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity('panic')
export class Panic{
  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @Column({default: 'ATIVO', nullable: true})
  stats: string;

  @Column()
  date: string;
}