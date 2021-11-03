import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { createMovieDto } from './dto/movie.dto';
  import { createTicketDto } from './dto/ticket.dto';
  import { MovieService } from './movie.service';
  
  @Controller('movie')
  export class MovieController {
    constructor(private readonly movieService: MovieService) {}
  
    @Get()
    findAllMovie() {
      return this.movieService.findAll();
    }
  
    @Post('/add')
    async createMovie(@Body() movie: createMovieDto) {
      return this.movieService.createMovie(movie);
    }

    @Post('/ticket')
    async createTicket(@Body() ticket: createTicketDto) {
      return this.movieService.createTicket(ticket);
    }
  }
  