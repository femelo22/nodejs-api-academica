import { AppDataSource } from "../data-source";
import { Video } from "../entity/Video";

export const videoRepository = AppDataSource.getRepository(Video);