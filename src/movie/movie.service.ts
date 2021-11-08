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

  async createTicket(ticket: createTicketDto) {
    const availableMovie = await this.movieRepository.findOne({movie_title : ticket.movie_title});
    if (!availableMovie) return "Movie doesn't exist";

    const availableSeats = (await availableMovie.movie_seats) > 0;
    if (!availableSeats) return "Seat isn't available";

    const updateMovieSeats = await this.movieRepository.update(
      { movie_title: ticket.movie_title },
      { movie_seats: Number(availableMovie.movie_seats) - Number(ticket.number_of_tickets) },
    );

    return ticket;
  }
}
