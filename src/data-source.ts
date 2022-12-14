import "reflect-metadata"
import { DataSource } from "typeorm"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "api-academica",
    synchronize: false,
    logging: false,
    entities: [ __dirname + "/**/entity/*.{ts,js}"],
    migrations: [ __dirname + "/**/migrations/*.{ts,js}"],
    subscribers: [],
})
