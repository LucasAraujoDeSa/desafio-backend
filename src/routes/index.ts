import { Router } from 'express';
import { SessionRoute } from './session.routes';
import UserRouter from './user.routes';

const router = Router();

router.use('/user', UserRouter);
router.use('/session', SessionRoute);

export default router;
