import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../../entities/User';
import UserRepository from '../../repositories/user/implementations/UserRepository';
import UpdateUser from '../../useCases/user/updateUser';

export default class UpdateUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { nome, email, telefone, idade, peso } = req.body;

      const userRepository = new UserRepository(getRepository(User));
      const service = new UpdateUser(userRepository);

      const user = await service.execute(id, {
        nome,
        email,
        telefone,
        idade,
        peso,
      });

      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}
