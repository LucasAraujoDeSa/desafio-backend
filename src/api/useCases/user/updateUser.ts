import User from '../../entities/User';
import { AlreadyExistError } from '../../errors/alreadyExistError';
import IUserRepository from '../../repositories/user/IUserRepository';
import { UserValidationGroup } from '../../validators/userValidations/userValidationGroup';

interface IRequest {
  user_id: string;
  nome: string;
  email: string;
  telefone: number;
  idade: number;
  peso: number;
}

export default class UpdateUser {
  constructor(
    private repository: IUserRepository,
    private userValidationGroup: UserValidationGroup,
  ) {}

  public async execute({
    user_id,
    nome,
    email,
    telefone,
    idade,
    peso,
  }: IRequest): Promise<User> {
    const user = await this.repository.findById(user_id);

    if (!user) {
      throw new Error('not exist');
    }

    const emailExist = await this.repository.findByEmail(email);

    if (emailExist && emailExist.id !== user.id) {
      throw new AlreadyExistError('email');
    }

    const isValid = this.userValidationGroup.validate({
      email,
      telefone,
      idade,
      peso,
    });

    if (!isValid) {
      throw new Error('param invalid');
    }

    user.email = email;
    user.nome = nome;
    user.telefone = telefone;
    user.idade = idade;
    user.peso = peso;

    await this.repository.save(user);

    return user;
  }
}
