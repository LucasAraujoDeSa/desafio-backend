import { Router } from 'express';
import SessionController from '../api/controller/user/SessionController';

const SessionRoute = Router();

const sessionController = new SessionController();

SessionRoute.post('/login', sessionController.handle);

export { SessionRoute };
