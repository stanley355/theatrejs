import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from './movie.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Movies])],
    exports:[TypeOrmModule]
})
export class MovieModule {}
