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
}