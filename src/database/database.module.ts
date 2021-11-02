import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.MYSQL_HOST,
            port: Number(process.env.MYSQL_PORT),
            username: process.env.MYSQL_USERNAME,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DB_NAME,
            entities: [__dirname + '/../**/*.entity.ts'],
            synchronize: true
        })
    ],
})
export class DatabaseModule {
    constructor(private connection: Connection) {}
}
