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
  import { MovieService } from './movie.service';
  
  @Controller('movie')
  export class MovieController {
    constructor(private readonly movieService: MovieService) {}
  
    @Get()
    findAllMovie() {
      return this.movieService.findAll();
    }
  
    @Post('/add')
    async createmovie(@Body() movie: createMovieDto) {
      return this.movieService.createMovie(movie);
    }
  }
  