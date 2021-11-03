import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movies } from './entities/movie.entity';
import { Tickets } from './entities/ticket.entity';
import { createMovieDto } from './dto/movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movies)
    private movieRepository: Repository<Movies>,
    
    @InjectRepository(Tickets)
    private ticketRepository: Repository<Tickets>,
  ) {}

  async findAll() {
    return await this.movieRepository.find();
  }

  async createMovie(movie: createMovieDto) {
    const newMovie = await this.movieRepository.create(movie);
    await this.movieRepository.save(newMovie);
    return newMovie;
  }
}
