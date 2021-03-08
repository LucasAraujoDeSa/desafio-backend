import IUserRepository from '../../repositories/user/IUserRepository';

export default class DeleteUser {
  constructor(private repository: IUserRepository) {}

  public async execute(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
