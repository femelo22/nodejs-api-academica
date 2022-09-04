import { Request, Response } from 'express'
import { Video } from "../entity/Video";
import { videoRepository } from '../repositories/videoRepository';

export class VideoController {

    async list(req: Request, res: Response): Promise<Video[]> {

        try {
            const videos = await videoRepository.find()

            return res.status(200).json(videos)
        } catch (error) {
            
        }

    }

    async findById(req: Request, res: Response): Promise<Video> {
        const { id } = req.params

        try {
            const video = await videoRepository.findOneBy({ id: id})

            if(!video) {
               return res.status(404).json({
                message: 'Video not found',
               })
            }

            return res.status(200).json(video)

        } catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }
    }
}