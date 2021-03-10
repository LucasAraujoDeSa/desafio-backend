import { Request, Response } from 'express';
import UserRepository from '../../repositories/user/implementations/UserRepository';
import UpdateUser from '../../useCases/user/updateUser';
import { userValidationGroup } from '../../validators/userValidations/userValidationGroup';

export default class UpdateUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.user;
      const { nome, email, telefone, idade, peso } = req.body;

      const userRepository = new UserRepository();
      const service = new UpdateUser(userRepository, userValidationGroup);

      const user = await service.execute({
        user_id: id,
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
