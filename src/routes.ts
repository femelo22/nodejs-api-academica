import { Router } from 'express';
import { RoomController } from './controller/RoomController';
import { SubjectController } from './controller/SubjectController';

const routes = Router();

//Subject
routes.post('/subjects', new SubjectController().create)
routes.get('/subjects', new SubjectController().list)
routes.delete('/subjects/:idSubject', new SubjectController().delete)

//Room
routes.post('/rooms', new RoomController().create)
routes.post('/rooms/:idRoom/create', new RoomController().createVideo)
routes.put('/rooms/:idRoom/subject', new RoomController().roomSubject)
routes.get('/rooms', new RoomController().list)


export default routes