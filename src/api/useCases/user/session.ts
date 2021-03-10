import { sign } from 'jsonwebtoken';
import { SecretConfig } from '../../../config/jwt';
import User from '../../entities/User';
import { NotExistError } from '../../errors/notExistError';
import { IHashProvider } from '../../providers/hashProvider/HashProvider';
import IUserRepository from '../../repositories/user/IUserRepository';

interface AuthenticateData {
  email: string;
  senha: string;
}

interface IResponse {
  user: User;
  token: string;
}

export class Session {
  constructor(
    private repository: IUserRepository,
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ email, senha }: AuthenticateData): Promise<IResponse> {
    const user = await this.repository.findByEmail(email);

    if (!user) {
      throw new NotExistError();
    }

    const same = await this.hashProvider.compare(senha, user.senha);

    if (!same) {
      throw new Error('invalid!!, try again');
    }

    const { secret } = SecretConfig;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn: '1h',
    });

    return {
      token,
      user,
    };
  }
}
