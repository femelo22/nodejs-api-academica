import { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log(error)
    return res.json("Caiu no erro")
}