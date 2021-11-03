import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tickets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movie_id: number;

  @Column('varchar', { length: 255 })
  movie_title: string;

  @Column('varchar', { length: 255 })
  customer_name: string;


  @Column({ default: 100 })
  number_of_tickets: number;
}