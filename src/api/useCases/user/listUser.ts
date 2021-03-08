import User from '../../entities/User';
import IUserRepository from '../../repositories/user/IUserRepository';

export default class ListUser {
  constructor(private repository: IUserRepository) {}

  public async execute(): Promise<User[]> {
    const users = await this.repository.list();

    return users;
  }
}
