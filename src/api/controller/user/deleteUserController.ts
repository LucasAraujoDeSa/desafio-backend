import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../../entities/User';
import UserRepository from '../../repositories/user/implementations/UserRepository';
import DeleteUser from '../../useCases/user/deleteUser';

export default class DeleteUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const userRepository = new UserRepository(getRepository(User));
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
