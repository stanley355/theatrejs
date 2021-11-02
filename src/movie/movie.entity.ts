import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MovieEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255 })
  movie_title: string;

  @Column({ default: 100 })
  movie_seats: number;
}
