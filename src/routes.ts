import { Router } from 'express';
import { SubjectController } from './controller/SubjectController';

const routes = Router();

routes.post('/subjects', new SubjectController().create)


export default routes