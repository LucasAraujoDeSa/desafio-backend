import User from '../../entities/User';
import IUserRepository from '../../repositories/user/IUserRepository';

interface IRequest {
  nome: string;
  email: string;
  telefone: number;
  idade: number;
  peso: number;
}

export default class UpdateUser {
  constructor(private repository: IUserRepository) {}

  public async execute(
    id: string,
    { nome, email, telefone, idade, peso }: IRequest,
  ): Promise<User> {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new Error('not exist');
    }

    user.nome = nome;
    user.email = email;
    user.telefone = telefone;
    user.idade = idade;
    user.peso = peso;

    await this.repository.save(user);

    return user;
  }
}
