import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from './entities/movie.entity';
import { Tickets } from './entities/ticket.entity';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Movies, Tickets])],
    providers: [MovieService],
    controllers: [MovieController],
    exports:[TypeOrmModule],
})
export class MovieModule {}
