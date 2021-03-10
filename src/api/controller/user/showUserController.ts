import { Request, Response } from 'express';
import UserRepository from '../../repositories/user/implementations/UserRepository';
import { ShowUser } from '../../useCases/user/show_user';

export default class ShowUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.user;

      const userRepository = new UserRepository();
      const service = new ShowUser(userRepository);

      const user = await service.execute(id);

      return res.status(201).json(user);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}
