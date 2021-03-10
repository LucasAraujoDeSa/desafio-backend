import { Request, Response } from 'express';
import UserRepository from '../../repositories/user/implementations/UserRepository';
import ListUser from '../../useCases/user/listUser';

export default class ListUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const userRepository = new UserRepository();
      const service = new ListUser(userRepository);

      const user = await service.execute();

      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}
