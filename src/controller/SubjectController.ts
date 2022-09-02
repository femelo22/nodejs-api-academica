import { Request, Response } from "express"

export class SubjectController {

    async create(req: Request, res: Response) {
        const { name } = req.body

        if(!name) {
            return res.status(400).json({
                message: 'O nome é obrigatório'
            })
        }

        try {

        } catch(err) {
            return res.status(500).json({
                message: err.message
            })
        }

    }
}