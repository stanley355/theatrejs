import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movies } from './entities/movie.entity';
import { Tickets } from './entities/ticket.entity';
import { createMovieDto } from './dto/movie.dto';
import { createTicketDto } from './dto/ticket.dto';

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
    const createNewMovie = await this.movieRepository.create(movie);
    const savedNewMovie = await this.movieRepository.save(createNewMovie);
    return savedNewMovie;
  }

  async checkMovieExist(title) {
    const movieList = await this.movieRepository.find();
    for (let i = 0; i < movieList.length; i++) {
      (await movieList[i].movie_title) === title;
      return movieList[i];
    }
  }

  async createTicket(ticket: createTicketDto) {
    const availableMovie = await this.checkMovieExist(ticket.movie_title);
    if (!availableMovie) return "Movie doesn't exist";

    const seatIsAvailable = (await availableMovie.movie_seats) > 0;
    if (!seatIsAvailable) return "Seat isn't available";

    // if (seatIsAvailable)
    return ticket;
  }
}
