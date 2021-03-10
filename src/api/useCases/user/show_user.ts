import User from '../../entities/User';
import { NotExistError } from '../../errors/notExistError';
import IUserRepository from '../../repositories/user/IUserRepository';

export class ShowUser {
  constructor(private repository: IUserRepository) {}

  public async execute(id: string): Promise<User> {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new NotExistError();
    }

    return user;
  }
}
