import User from '../../entities/User';
import IUserRepository from '../../repositories/user/IUserRepository';

export class ShowUser {
  constructor(private repository: IUserRepository) {}

  public async execute(id: string): Promise<User | undefined> {
    const user = await this.repository.findById(id);

    return user;
  }
}
