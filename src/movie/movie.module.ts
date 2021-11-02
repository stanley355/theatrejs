import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from './movie.entity';
// import { MovieService } from './movie.service';
// import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Movies])],
    providers: [MovieService],
    controllers: [MovieController],
    exports:[TypeOrmModule],
})
export class MovieModule {}
