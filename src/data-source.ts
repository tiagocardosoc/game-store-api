import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from "typeorm";
import { UserModel } from './core/models/user.model';
import { UserTable1700156392601 } from './database/migrations/1700156392601-UserTable';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: +process.env.MYSQL_PORT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [UserModel],
    migrations: [UserTable1700156392601]
})