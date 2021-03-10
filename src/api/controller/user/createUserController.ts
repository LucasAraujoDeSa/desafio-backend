import { Request, Response } from 'express';
import { BcryptAdapter } from '../../providers/hashProvider/implementations/bcryptAdapter';
import UserRepository from '../../repositories/user/implementations/UserRepository';
import CreateUser from '../../useCases/user/create_user';
import { userValidationGroup } from '../../validators/userValidations/userValidationGroup';

export default class CreateUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { nome, email, senha, telefone, idade, peso, etinia } = req.body;

      const userRepository = new UserRepository();
      const hashProvider = new BcryptAdapter();
      const service = new CreateUser(
        userRepository,
        hashProvider,
        userValidationGroup,
      );

      const user = await service.execute({
        nome,
        email,
        senha,
        telefone,
        idade,
        peso,
        etinia,
      });

      return res.status(201).json(user);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}
