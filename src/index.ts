import express, { NextFunction, Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { errorMiddleware } from "./errors/error"
import routes from "./routes"

AppDataSource.initialize().then(async () => {

    const app = express();

    app.use(express.json());
    app.use(routes);

    app.use(errorMiddleware);

    app.listen(3000, () => {
        console.log('server listening on port 3000')
    })


}).catch(error => console.log(error))
