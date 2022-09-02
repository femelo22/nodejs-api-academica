import "reflect-metadata"
import { DataSource } from "typeorm"
import { Room } from "./entity/Room"
import { Video } from "./entity/Video"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "api-academica",
    synchronize: false,
    logging: false,
    entities: [Room, Video],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
    subscribers: [],
})
