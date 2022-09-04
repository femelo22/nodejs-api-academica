import { AppDataSource } from "../data-source";
import { Room } from "../entity/Room";

export const roomRepository = AppDataSource.getRepository(Room);