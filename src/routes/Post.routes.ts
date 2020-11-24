import { Router } from 'express';
import PostController from '../controller/PostController';

const postController = new PostController();

const PostRoutes = Router();

PostRoutes.post('/', postController.create);
PostRoutes.get('/', postController.index);

export default PostRoutes;
