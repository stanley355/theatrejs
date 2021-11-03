import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255 })
  movie_title: string;

  @Column({ default: 100 })
  movie_seats: number;
}
