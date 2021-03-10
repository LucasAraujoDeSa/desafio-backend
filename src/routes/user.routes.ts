import { Router } from 'express';
import CreateUserController from '../api/controller/user/createUserController';
import DeleteUserController from '../api/controller/user/deleteUserController';
import ListUserController from '../api/controller/user/listUseController';
import ShowUserController from '../api/controller/user/showUserController';
import UpdateUserController from '../api/controller/user/updateUserController';
import { AuthMiddleware } from '../api/middleware/authMiddleware';

const UserRouter = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();
const showUserController = new ShowUserController();

UserRouter.post('/', createUserController.handle);
UserRouter.get('/', listUserController.handle);
UserRouter.delete('/profile', AuthMiddleware, deleteUserController.handle);
UserRouter.put('/profile', AuthMiddleware, updateUserController.handle);
UserRouter.get('/profile/me', AuthMiddleware, showUserController.handle);

export default UserRouter;
