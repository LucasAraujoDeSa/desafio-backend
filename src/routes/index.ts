import { Router } from 'express';
import CategoryRoute from './Category.routes';
import PostRoutes from './Post.routes';

const router = Router();

router.use('/category', CategoryRoute);
router.use('/posts', PostRoutes);

export default router;
