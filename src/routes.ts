import { Router } from 'express';
import { RoomController } from './controller/RoomController';
import { SubjectController } from './controller/SubjectController';

const routes = Router();

routes.post('/subjects', new SubjectController().create)
routes.post('/rooms', new RoomController().create)
routes.post('/rooms/:idRoom/create', new RoomController().createVideo)
routes.put('/rooms/:idRoom/subject', new RoomController().roomSubject)
routes.get('/rooms', new RoomController().list)

export default routes