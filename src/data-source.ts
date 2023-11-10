import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from "typeorm";

const port = process.env.MYSQL_PORT as unknown as number | undefined

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: port,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
})