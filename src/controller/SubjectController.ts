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

    async list(req: Request, res: Response): Promise<Subject[]>{

        try {
            
            const subjects = await subjectRepository.find();

            return res.json(subjects);
        } catch (error) {
            
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        const { idSubject } = req.params;

        console.log(idSubject)

        try {
            const subject = await subjectRepository.findOneBy({ id: Number(idSubject) });

            if(!subject) {
                return res.status(404).json({
                    message: `Subject ${idSubject} nåo encontrado.`
                })
            }

            await subjectRepository.delete(subject);

            return res.status(204).send();

        } catch (error) {
            
        }
    }
}