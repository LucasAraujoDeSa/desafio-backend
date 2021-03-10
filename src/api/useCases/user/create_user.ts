import User from '../../entities/User';
import { AlreadyExistError } from '../../errors/alreadyExistError';
import { IHashProvider } from '../../providers/hashProvider/HashProvider';
import IUserRepository from '../../repositories/user/IUserRepository';
import { UserValidationGroup } from '../../validators/userValidations/userValidationGroup';

interface IRequest {
  nome: string;
  email: string;
  senha: string;
  telefone: number;
  idade: number;
  peso: number;
  etinia: string;
}

export default class CreateUser {
  constructor(
    private repository: IUserRepository,
    private hashProvider: IHashProvider,
    private userValidationGroup: UserValidationGroup,
  ) {}

  public async execute({
    nome,
    email,
    senha,
    telefone,
    idade,
    peso,
    etinia,
  }: IRequest): Promise<User> {
    const exist = await this.repository.findByEmail(email);

    if (exist) {
      throw new AlreadyExistError('user already exist');
    }

    const validate = this.userValidationGroup.validate({
      email,
      telefone,
      idade,
      peso,
    });

    if (!validate) {
      throw new Error('param invalid');
    }

    const hash = await this.hashProvider.hash(senha);

    const user = await this.repository.create({
      nome,
      email,
      senha: hash,
      telefone,
      idade,
      peso,
      etinia,
    });

    return user;
  }
}
