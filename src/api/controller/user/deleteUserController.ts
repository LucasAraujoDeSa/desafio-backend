import { Request, Response } from 'express';
import UserRepository from '../../repositories/user/implementations/UserRepository';
import DeleteUser from '../../useCases/user/deleteUser';

export default class DeleteUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.user;
      const userRepository = new UserRepository();
      const service = new DeleteUser(userRepository);

      await service.execute(id);

      return res.status(200).json({
        message: 'user deleted',
      });
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}
