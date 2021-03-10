import { Router } from 'express';
import { AddressRouter } from './address.routes';
import { SessionRoute } from './session.routes';
import UserRouter from './user.routes';

const router = Router();

router.use('/user', UserRouter);
router.use('/session', SessionRoute);
router.use('/address', AddressRouter);

export default router;
