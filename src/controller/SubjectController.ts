import { Request, Response } from "express"
import { Subject } from '../entity/Subject'
import { subjectRepository } from "../repositories/SubjectRepository"

export class SubjectController {

    async create(req: Request, res: Response): Promise<Subject> {

        const { name } = req.body

        if(!name) {
            return res.status(400).json({
                message: 'O nome é obrigatório'
            })
        }

        try {

            const newSubject = subjectRepository.create({ name });

            await subjectRepository.save(newSubject);

            return res.status(201).json(newSubject);

        } catch(err) {
            return res.status(500).json({
                message: err.message
            })
        }

    }
}