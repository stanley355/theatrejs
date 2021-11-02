import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movies } from './movie.entity';
import { createMovieDto } from './dto/movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movies)
    private movieRepository: Repository<Movies>,
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
