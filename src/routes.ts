import { Router } from 'express';
import { RoomController } from './controller/RoomController';
import { SubjectController } from './controller/SubjectController';

const routes = Router();

routes.post('/subjects', new SubjectController().create)
routes.post('/rooms', new RoomController().create)


export default routes