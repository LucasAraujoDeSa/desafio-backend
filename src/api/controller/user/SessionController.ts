import { Request, Response } from 'express';
import { BcryptAdapter } from '../../providers/hashProvider/implementations/bcryptAdapter';
import UserRepository from '../../repositories/user/implementations/UserRepository';
import { Session } from '../../useCases/user/session';

export default class CreateUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { email, senha } = req.body;

      const userRepository = new UserRepository();
      const bcryptAdapter = new BcryptAdapter();
      const service = new Session(userRepository, bcryptAdapter);

      const user = await service.execute({
        email,
        senha,
      });

      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}
